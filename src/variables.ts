import type { CompanionVariableDefinitions, CompanionVariableValues } from '@companion-module/base'
import type ModuleInstance from './main.js'

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	const definitions: CompanionVariableDefinitions = {}
	const values: CompanionVariableValues = {}
	// iterate through divisions
	self.selectedEvents.forEach((e) => {
		const isChild = e.division > 0
		definitions[isChild ? `d${e.division}_code` : `code`] = {
			name: isChild ? `Division Code` : `Event Code`,
		}
		values[isChild ? `d${e.division}_code` : `code`] = e.eventCode
		definitions[isChild ? `d${e.division}_name` : `name`] = {
			name: isChild ? `Division Name` : `Event Name`,
		}
		values[isChild ? `d${e.division}_name` : `name`] = e.name
		definitions[isChild ? `d${e.division}_match_name` : `match_name`] = {
			name: isChild ? `D${e.division} Current Match Name` : `Current Match Name`,
		}
		definitions[isChild ? `d${e.division}_match_status` : `match_status`] = {
			name: isChild ? `D${e.division} Match Status` : `Match Status`,
		}
		definitions[isChild ? `d${e.division}_match_timer` : `match_timer`] = {
			name: isChild ? `D${e.division} Match Timer` : `Match Timer`,
		}
		definitions[isChild ? `d${e.division}_match_update_data` : `match_update_data`] = {
			name: isChild ? `D${e.division} Match Update Data` : `Match Update Data`,
		}
		for (let i = 1; i <= e.fieldCount; i++) {
			definitions[isChild ? `d${e.division}_f${i}_match_name` : `f${i}_match_name`] = {
				name: isChild ? `D${e.division} Field ${i} Current Match Name` : `Field ${i} Current Match Name`,
			}
			definitions[isChild ? `d${e.division}_f${i}_match_status` : `f${i}_match_status`] = {
				name: isChild ? `D${e.division} Field ${i} Match Status` : `Field ${i} Match Status`,
			}
			definitions[isChild ? `d${e.division}_f${i}_match_timer` : `f${i}_match_timer`] = {
				name: isChild ? `D${e.division} Field ${i} Match Timer` : `Field ${i} Match Timer`,
			}
		}
	})
	self.setVariableDefinitions(definitions)
	self.setVariableValues(values)
}
