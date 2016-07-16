var express = require('express');
var app = express();
var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');

app.use(log.logger);
// app.get('*', function(req, res) {
//     res.send('Express Response');
// });

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.use(errorHandlers.notFound);

app.listen(3000);
console.log("App server running on port 3000");