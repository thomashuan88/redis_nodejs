var io = require('socket.io')();

io.on('connection', function(socket) {
    socket.emit('ping');

    socket.on('pong', function(data) {
        console.log('pong');
    });
});

io.listen(4000);