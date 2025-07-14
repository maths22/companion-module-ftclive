import { Regex, type SomeCompanionConfigField } from '@companion-module/base'
import { ModuleInstance } from './main.js'

export interface ModuleConfig {
	host: string
	port: number
	event: string
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
	]
}
