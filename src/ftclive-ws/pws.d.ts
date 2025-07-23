declare module 'pws' {
	type PwsOptions = {
		pingTimeout?: number
		maxTimeout?: number
		maxRetries?: number
		nextReconnectDelay?: (retries: number) => number
		onopen?: WebSocket['onopen']
		onclose?: WebSocket['onclose']
		onmessage?: WebSocket['onmessage']
		onerror?: WebSocket['onerror']
	}
	function pws(url: string, protocols: string | string[], webSocket: typeof WebSocket, options?: PwsOptions): WebSocket
	function pws(url: string, protocols: string | string[], options?: PwsOptions): WebSocket
	function pws(url: string, webSocket: typeof WebSocket, options?: PwsOptions): WebSocket
	function pws(url: string, options?: PwsOptions): WebSocket
	export = pws
}
