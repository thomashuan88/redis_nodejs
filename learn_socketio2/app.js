var io = require('socket.io').listen(4000);



io.sockets.on('connection', function(socket){

    socket.on('pong', function(data){
        console.log('pong');
    });    
    io.sockets.emit('ping');
});
