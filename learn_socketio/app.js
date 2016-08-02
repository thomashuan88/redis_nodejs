var io = require('socket.io').listen(4000);

io.sockets.on('connection', function(socket){
    socket.on('join', function(data) {
        socket.emit('userJoined', data);
        socket.username = data.username;        
    });
    socket.on('toserver', function(data, done) {
        console.log(data);
        socket.emit('fromserver', {username: socket.username});
        done('ack');
    })

});

