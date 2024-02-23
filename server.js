const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use(express.static('public')); // Ensure your 'public' directory contains 'index.html' and 'app.js'

app.get('/updateLux', (req, res) => {
    const lux = req.query.lux;
    console.log(`Lux value received: ${lux}`);
    io.emit('lux', { value: lux });
    res.sendStatus(200);
});
