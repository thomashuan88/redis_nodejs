var io = require('socket.io').listen(4000);

io.sockets.on('connection', function(socket) {
    socket.on('join', function(data) {
        console.log(data);
        socket.username = data.username;
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('join', { username: data.username, socket: socket.id, room: data.room });
    });

    socket.on('toserver', function(data) {
        socket.broadcast.to(data.room).emit('fromserver', { username: socket.username, room: data.room });
    });

    socket.on('privatePing', function(data) {
        io.sockets.connected[data.socket].emit('fromserver', { username: socket.username, priv: true, room: data.room })
    });
});