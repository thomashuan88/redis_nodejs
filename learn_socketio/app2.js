var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(server);

// io.sockets.on('connection', function(socket){
//     socket.emit('ping');

//     socket.on('pong', function(data) {
//         console.log('pong');
//     });
// });

io.sockets.on('connection', function(socket) {
    socket.emit('message', 'you are connected!');

    socket.on('message', function(message) {
        console.log('A client speaking : ' + message);
    });
});

server.listen(8080);