import type {
	CompanionStaticUpgradeProps,
	CompanionStaticUpgradeResult,
	CompanionStaticUpgradeScript,
	CompanionUpgradeContext,
} from '@companion-module/base'
import type { ModuleConfig } from './config.js'

export const UpgradeScripts: CompanionStaticUpgradeScript<ModuleConfig>[] = [
	/*
	 * Place your upgrade scripts here
	 * Remember that once it has been added it cannot be removed!
	 */
	function (
		_context: CompanionUpgradeContext<ModuleConfig>,
		props: CompanionStaticUpgradeProps<ModuleConfig>,
	): CompanionStaticUpgradeResult<ModuleConfig> {
		const config = props.config || ({} as ModuleConfig)
		config.port = config.port ?? 80
		config.autoDuration = config.autoDuration ?? 30
		config.transitionDuration = config.transitionDuration ?? 8
		config.teleopDuration = config.teleopDuration ?? 120

		return {
			updatedConfig: props.config,
			updatedActions: [],
			updatedFeedbacks: [],
		}
	},
	// function (context, props) {
	// 	return {
	// 		updatedConfig: null,
	// 		updatedActions: [],
	// 		updatedFeedbacks: [],
	// 	}
	// },
]
