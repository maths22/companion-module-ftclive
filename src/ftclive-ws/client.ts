import { LogLevel } from '@companion-module/base'
import { ApiV2Update } from 'ftclive-client'
import pws from 'pws'

export function createFtcLiveWebSocketClient(
	log: (level: LogLevel, message: string) => void,
	host: string,
	port: number,
	eventCode: string,
	onConnectionChange: (isConnected: boolean) => void,
	onMessage: (message: ApiV2Update) => void,
): WebSocket {
	const url = `ws://${host}:${port}/api/v2/stream/?code=${eventCode}`

	// Create a new WebSocket connection
	const ws = pws(url, WebSocket, { pingTimeout: 15 * 1000 })
	ws.onopen = () => {
		onConnectionChange(true)
	}
	ws.onclose = () => {
		onConnectionChange(false)
	}

	ws.onerror = (error) => {
		log('error', `WebSocket error: ${JSON.stringify(error)}`)
	}

	ws.onmessage = (msg) => {
		if (msg.data === 'pong') {
			return
		}
		const data: ApiV2Update = JSON.parse(msg.data)
		onMessage(data)
	}

	return ws
}
