const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io').listen(httpServer);
const Game = require('./Game');
const game = new Game();

io.on('connection', socket => {
    const player = game.addPlayer(socket.id);

    socket.emit('build_game', game);

    socket.broadcast.emit('add_player', {
        player,
        id: socket.id
    });

    socket.on('move_player', (direction) => {
        const player = game.players[socket.id];
        console.log(player)
        player.move(direction);
        console.log(player)
        socket.broadcast.emit('player_moved', {
            player,
            id: socket.id
        });
    });
});

httpServer.listen(3000, () => {
    console.log('Server running on port 3000');
});
