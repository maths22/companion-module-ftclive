import { InstanceBase, InstanceStatus, type InstanceTypes, type SomeCompanionConfigField } from '@companion-module/base'
import { GetConfigFields, type ModuleConfig } from './config.js'
import { UpdateVariableDefinitions } from './variables.js'
import { UpgradeScripts } from './upgrades.js'
import { UpdateActions } from './actions.js'
import { UpdateFeedbacks } from './feedbacks.js'
import { createFtcLiveWebSocketClient } from './ftclive-ws/client.js'
import type { paths, components } from './ftclive.d.ts'
import createClient from 'openapi-fetch'
import type { Client } from 'openapi-fetch'

export async function checkServer(host: string, port: number): Promise<boolean> {
	try {
		const res = await fetch(`http://${host}:${port}/whoami/`, {
			signal: AbortSignal.timeout(1000),
		})
		const body = await res.text()
		return body == 'FIRST_TECH_CHALLENGE_SCORING_SOFTWARE'
	} catch (_) {
		return false
	}
}

export interface MyTypes extends InstanceTypes {
	config: ModuleConfig
}

export default class ModuleInstance extends InstanceBase<MyTypes> {
	config!: ModuleConfig // Setup in init()
	eventList: string[] = []
	apiClient?: Client<paths>
	timeouts: Record<string, NodeJS.Timeout[]> = {}
	intervals: Record<string, NodeJS.Timeout[]> = {}

	selectedEvents: components['schemas']['ApiV1Event'][] = []
	socketClients: Record<string, WebSocket> = {}
	connectionStatus: Record<string, boolean> = {}

	constructor(internal: unknown) {
		super(internal)
	}

	async init(config: ModuleConfig): Promise<void> {
		this.config = config

		void this.configUpdated(config)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
	}
	// When module gets deleted
	async destroy(): Promise<void> {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
		const isOk = await checkServer(config.host, config.port)
		if (!isOk) {
			this.updateStatus(InstanceStatus.BadConfig, 'Server not found or is not running FTCLive')
			return
		}
		this.apiClient = createClient<paths>({ baseUrl: `http://${config.host}:${config.port}` })

		const getEventsResult = await this.apiClient.GET('/api/v1/events/')
		if (getEventsResult.error) {
			this.updateStatus(InstanceStatus.BadConfig, 'Failed to fetch events from server')
			return
		}
		this.eventList = getEventsResult.data.eventCodes!
		if (this.config.event) {
			try {
				const eventCode = this.config.event
				let eventList: string[]
				if (eventCode.endsWith('_0')) {
					eventList = this.eventList
						.filter((e) => e.startsWith(eventCode.slice(0, -2)))
						.sort((a, b) => a.localeCompare(b))
				} else {
					eventList = [eventCode]
				}
				this.selectedEvents = await Promise.all(
					eventList.map(async (e) => {
						if (!this.apiClient) {
							throw new Error('API client not initialized')
						}
						const res = await this.apiClient.GET('/api/v1/events/{code}/', { params: { path: { code: e } } })
						if (res.error) {
							throw new Error(`Failed to fetch event ${e}: ${res.error.message}`)
						}
						const eventCode = res.data.eventCode!
						this.log('info', `Connected to event ${eventCode} (${res.data.name})`)
						return res.data
					}),
				)
				this.updateStatus(InstanceStatus.Connecting)
				this.updateVariableDefinitions()
				const eventCodes = this.selectedEvents.map((e) => e.eventCode!)
				Object.keys(this.socketClients).forEach((key) => {
					if (!eventCodes.includes(key)) {
						this.socketClients[key].close()
						delete this.socketClients[key]
						delete this.connectionStatus[key]
					}
				})
				let connectedNew = false
				this.selectedEvents.forEach((event) => {
					const eventCode = event.eventCode!
					if (!this.socketClients[eventCode]) {
						connectedNew = true
						const varPrefix = event.division > 0 ? `d${event.division}_` : ''
						this.socketClients[eventCode] = createFtcLiveWebSocketClient(
							(level, message) => this.log(level, message),
							this.config.host,
							this.config.port,
							eventCode,
							(isConnected) => {
								this.connectionStatus[eventCode] = isConnected
								if (eventCodes.every((e) => this.connectionStatus[e])) {
									this.updateStatus(InstanceStatus.Ok)
								} else {
									this.updateStatus(InstanceStatus.Connecting)
								}
							},
							(update) => {
								const now = Date.now()
								let timerInterval: NodeJS.Timeout
								const timeoutKey = `${eventCode}_${update.payload?.shortName}`
								switch (update.updateType) {
									case 'SHOW_PREVIEW':
										this.setVariableValues({
											[`${varPrefix}f${update.payload?.field}_match_name`]: update.payload?.shortName,
											[`${varPrefix}f${update.payload?.field}_match_status`]: 'preview',
											[`${varPrefix}match_name`]: update.payload?.shortName,
											[`${varPrefix}match_status`]: 'preview',
											[`${varPrefix}match_update_data`]: JSON.stringify(update.payload),
										})
										break
									case 'SHOW_MATCH':
										this.setVariableValues({
											[`${varPrefix}f${update.payload?.field}_match_name`]: update.payload?.shortName,
											[`${varPrefix}f${update.payload?.field}_match_status`]: 'prematch',
											[`${varPrefix}match_name`]: update.payload?.shortName,
											[`${varPrefix}match_status`]: 'prematch',
											[`${varPrefix}match_update_data`]: JSON.stringify(update.payload),
										})
										break
									case 'MATCH_START':
										// TODO timer variables maybe
										this.setVariableValues({
											[`${varPrefix}f${update.payload?.field}_match_name`]: update.payload?.shortName,
											[`${varPrefix}f${update.payload?.field}_match_status`]:
												this.config.countdownDuration > 0 ? 'countdown' : 'auto',
											[`${varPrefix}match_name`]: update.payload?.shortName,
											[`${varPrefix}match_status`]: this.config.countdownDuration > 0 ? 'countdown' : 'auto',
											[`${varPrefix}match_timer`]:
												this.config.countdownDuration > 0 ? this.config.countdownDuration : this.config.autoDuration,
											[`${varPrefix}match_update_data`]: JSON.stringify(update.payload),
										})
										this.timeouts[timeoutKey] = []
										this.intervals[timeoutKey] = []
										timerInterval = setInterval(() => {
											const elapsed = Math.floor((Date.now() - now) / 1000)
											let remainingInPeriod = 0
											if (elapsed < this.config.countdownDuration) {
												remainingInPeriod = this.config.countdownDuration - elapsed
											} else if (elapsed < this.config.countdownDuration + this.config.autoDuration) {
												remainingInPeriod = this.config.countdownDuration + this.config.autoDuration - elapsed
											} else if (
												elapsed <
												this.config.countdownDuration + this.config.autoDuration + this.config.transitionDuration
											) {
												remainingInPeriod =
													this.config.countdownDuration +
													this.config.autoDuration +
													this.config.transitionDuration -
													elapsed
											} else if (
												elapsed <
												this.config.countdownDuration +
													this.config.autoDuration +
													this.config.transitionDuration +
													this.config.teleopDuration
											) {
												remainingInPeriod =
													this.config.countdownDuration +
													this.config.autoDuration +
													this.config.transitionDuration +
													this.config.teleopDuration -
													elapsed
											}
											this.setVariableValues({
												[`${varPrefix}f${update.payload?.field}_match_timer`]: remainingInPeriod,
												[`${varPrefix}match_timer`]: remainingInPeriod,
											})
										}, 100)

										this.intervals[timeoutKey].push(timerInterval)
										if (this.config.countdownDuration > 0) {
											this.timeouts[timeoutKey].push(
												setTimeout(
													() =>
														this.setVariableValues({
															[`${varPrefix}f${update.payload?.field}_match_status`]: 'auto',
															[`${varPrefix}match_status`]: 'auto',
														}),
													this.config.countdownDuration * 1000,
												),
											)
										}
										this.timeouts[timeoutKey].push(
											setTimeout(
												() =>
													this.setVariableValues({
														[`${varPrefix}f${update.payload?.field}_match_status`]: 'transition',
														[`${varPrefix}match_status`]: 'transition',
													}),
												(this.config.countdownDuration + this.config.autoDuration) * 1000,
											),
										)
										this.timeouts[timeoutKey].push(
											setTimeout(
												() =>
													this.setVariableValues({
														[`${varPrefix}f${update.payload?.field}_match_status`]: 'teleop',
														[`${varPrefix}match_status`]: 'teleop',
													}),
												(this.config.countdownDuration + this.config.autoDuration + this.config.transitionDuration) *
													1000,
											),
										)
										this.timeouts[timeoutKey].push(
											setTimeout(
												() => {
													this.setVariableValues({
														[`${varPrefix}f${update.payload?.field}_match_status`]: 'done',
														[`${varPrefix}match_status`]: 'done',
														[`${varPrefix}f${update.payload?.field}_match_timer`]: 0,
														[`${varPrefix}match_timer`]: 0,
													})
													clearInterval(timerInterval)
												},
												(this.config.countdownDuration +
													this.config.autoDuration +
													this.config.transitionDuration +
													this.config.teleopDuration) *
													1000,
											),
										)
										break
									case 'MATCH_ABORT':
										this.timeouts[timeoutKey].forEach((t) => clearTimeout(t))
										delete this.timeouts[timeoutKey]
										this.intervals[timeoutKey].forEach((i) => clearInterval(i))
										delete this.intervals[timeoutKey]
										this.setVariableValues({
											[`${varPrefix}f${update.payload?.field}_match_name`]: update.payload?.shortName,
											[`${varPrefix}f${update.payload?.field}_match_status`]: 'aborted',
											[`${varPrefix}f${update.payload?.field}_match_timer`]: 0,
											[`${varPrefix}match_name`]: update.payload?.shortName,
											[`${varPrefix}match_status`]: 'aborted',
											[`${varPrefix}match_timer`]: 0,
											[`${varPrefix}match_update_data`]: JSON.stringify(update.payload),
										})
										break
									case 'MATCH_POST':
										this.setVariableValues({
											[`${varPrefix}f${update.payload?.field}_match_name`]: update.payload?.shortName,
											[`${varPrefix}f${update.payload?.field}_match_status`]: 'post',
											[`${varPrefix}match_name`]: update.payload?.shortName,
											[`${varPrefix}match_status`]: 'post',
											[`${varPrefix}match_update_data`]: JSON.stringify(update.payload),
										})
										break
								}
								this.log('debug', `Received update for event ${eventCode}: ${JSON.stringify(update)}`)
							},
						)
					}
				})
				if (!connectedNew) {
					this.updateStatus(InstanceStatus.Ok)
				}
			} catch (e) {
				this.log('error', `Failed configuring event: ${e}`)
				this.updateStatus(InstanceStatus.BadConfig, `Could not find event ${this.config.event}`)
			}
		} else {
			this.updateStatus(InstanceStatus.BadConfig, 'No event selected')
		}
	}

	// Return config fields for web config
	getConfigFields(): SomeCompanionConfigField[] {
		return GetConfigFields(this)
	}

	updateActions(): void {
		UpdateActions(this)
	}

	updateFeedbacks(): void {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions(): void {
		UpdateVariableDefinitions(this)
	}
}

export { UpgradeScripts }
