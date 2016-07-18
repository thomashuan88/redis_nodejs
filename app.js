var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var app = express();
var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
// var util = require('./middleware/utilities');


app.set('view engine', 'ejs');
app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser('copycat'));
app.use(session({
    secret: 'copycat',
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
        url: 'redis://localhost'
    })
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(csrf({ cookie: true }));
// app.use(util.csrf);

var csrfProtection = csrf({ cookie: true });

app.use(function(req, res, next) {
    if (req.session.pageCount) {
        req.session.pageCount++;
    } else {
        req.session.pageCount = 1;
    }
    next();
})

app.set('view options', {defaultLayout: 'layout'});
// app.get('*', function(req, res) {
//     res.send('Express Response');
// });

app.get('/', routes.index);
app.get('/login', csrfProtection, routes.login);
app.post('/login', csrfProtection, routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function(req, res, next) {
    next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(3000);
console.log("App server running on port 3000");