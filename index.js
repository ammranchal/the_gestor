var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/view/index.html");
});

var port = process.env.PORT || 3000;

app.listen(port, function (err) {
    if (err) {
        console.log('Problemas al conectarse:', err);
    }
});