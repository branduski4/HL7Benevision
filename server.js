// const net = require('net');
// const hl7 = require('node-hl7');
import net from 'net'
import hl7 from 'node-hl7'

const HOST = '192.168.1.25'; // direccion ip de la comptuadora
const PORT = 6664; // puerto del monitor de signos vitales

const server = net.createServer(function(socket) {
  console.log('Connected to vital sign monitor');

  // Listen for data from the vital sign monitor
  socket.on('data', function(data) {
    
    console.log('DATA:', data.toString());

    
  });

  // Handle socket errors
  socket.on('error', function(error) {
    console.error('Socket error:', error);
  });

  // Handle socket disconnects
  socket.on('close', function() {
    console.log('Disconnected from vital sign monitor');
  });
});

server.listen(PORT, HOST, function() {
  console.log('Server listening on', HOST + ':' + PORT);
});