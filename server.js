const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io').listen(httpServer);
const Game = require('./Game');
const game = new Game();

io.on('connection', socket => {
    game.addPlayer(socket.id);
    socket.emit('build_game', game);
});

httpServer.listen(3000, () => {
    console.log('Server running on port 3000');
});
