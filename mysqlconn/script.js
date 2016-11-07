var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    database: 'dilicms2'
});

connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('connected');
    }
});


app.get('/', function(req, res) {
    connection.query("select * from dili_customer limit 10", function(error, rows, fields) {
        console.log(rows)
        if (!!error) {
            console.log('Error in the query');
        } else {
            res.send(JSON.stringify(rows));
        }
    });
});

app.listen(1337);