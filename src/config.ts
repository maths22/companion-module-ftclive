import { Regex, type SomeCompanionConfigField } from '@companion-module/base'
import { ModuleInstance } from './main.js'

export interface ModuleConfig {
	host: string
	port: number
	event: string
	autoDuration: number
	transitionDuration: number
	teleopDuration: number
}

export function GetConfigFields(self: ModuleInstance): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Server IP',
			width: 8,
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 4,
			min: 1,
			max: 65535,
			default: 80,
		},
		{
			type: 'dropdown',
			id: 'event',
			label: 'Event',
			default: '',
			width: 12,
			choices: [
				{
					id: '',
					label: 'Select an event',
				},
				...self.eventList.map((e) => ({
					id: e,
					label: e,
				})),
			],
		},
		{
			type: 'number',
			id: 'autoDuration',
			label: 'Autonomous Duration (seconds)',
			width: 3,
			min: 1,
			max: 600,
			default: 30,
		},
		{
			type: 'number',
			id: 'transitionDuration',
			label: 'Transition Duration (seconds)',
			width: 3,
			min: 1,
			max: 600,
			default: 8,
		},
		{
			type: 'number',
			id: 'teleopDuration',
			label: 'Teleop Duration (seconds)',
			width: 3,
			min: 1,
			max: 600,
			default: 120,
		},
	]
}
