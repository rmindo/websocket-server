((w) => {

	w.WebSocket = w.WebSocket || w.MozWebSocket;

	// Check if websocket is supported
	if(!w.WebSocket) {

		console.log('WebSocket is not supported in your current browser.');
	}

	// Open Connection
	const ws = new WebSocket('ws://localhost:9000/ws');

	// Open socket
	ws.onopen = () => console.log('Connected!');

	// Error
	ws.onerror = (e) => console.log(`Error: ${e}`);

	// Incoming message
	ws.onmessage = (message) => {

		// Do something in the frontend
		console.log(message.data);
	};


})(window);