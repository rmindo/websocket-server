"use strict";


const port = 9000;
const http = require('http');
const express = require('express');
const websocket = require('websocket').server;


const app = express();


/**
 * HTTP server
 */
var server = http.createServer(app);



/**
 * WebSocket endpoint
 */
app.get('/ws', function(req, res) {


	/**
	 * WebSocket server
	 */
	var ws = new websocket({httpServer: server});


	/**
	 * Connect to WebSocket
	 */
	ws.on('request', (request) => {

		console.log('WebSocket Connected');

		// Connection
		var con = request.accept(null, request.origin);


		setInterval(() => {

			con.sendUTF(new Date());

		}, 1000);

		// Disconnected
		con.on('close', (con) => console.log('WebSocket Closed'));
	});
});



// Listen to the port
server.listen(port, () => 'Listening on port '+ port);