const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

app.get('/updateLux', (req, res) => {
    const lux = req.query.lux; // Get the lux value from the query string
    console.log(`Lux value received: ${lux}`);
    io.emit('lux', { value: lux }); // Emit the lux value to all connected WebSocket clients
    res.sendStatus(200);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
