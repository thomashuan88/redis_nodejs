var io = require('socket.io').listen(4000);

io.sockets.on('connection', function(socket){
    socket.on('join', function(data) {
        socket.broadcast.emit('userJoined', data);
        socket.username = data.username;        
    });
    socket.on('toserver', function(data, done) {
        socket.broadcast.emit('fromserver', {username: socket.username});
        done('ack');
    })

});

