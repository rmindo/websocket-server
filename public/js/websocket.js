((w) => {

	w.WebSocket = w.WebSocket || w.MozWebSocket;

	// Check if websocket is supported
	if(!w.WebSocket) {

		alert('WebSocket is not supported in your current browser. Please upgrade to latest version.');
	}

	const ws = new WebSocket('ws://localhost:9000/ws');


	// Open socket
	ws.onopen = () => console.log('Connected!');

	// Error
	ws.onerror = (e) => console.log(`Error: ${e}`);

	// Incoming message
	ws.onmessage = (message) => {

		w.document.getElementById('content').innerHTML = message.data;
	};

})(window);
