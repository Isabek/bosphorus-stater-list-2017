var express = require('express');
var http = require('http');
var path = require('path');


var host = process.env.HOST,
    port = process.env.PORT;

var app = express();

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '0.0.0.0');

http.createServer(app).listen(app.get('port'), app.get('host'), function () {
    console.log('Express server listening on: http://' + app.get('host') + ":" + app.get('port'))
});