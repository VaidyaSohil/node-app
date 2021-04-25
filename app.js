var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//io.on('connection', function (socket) {
//  console.log('a user connected');
//  socket.on('disconnect', () => {
//    console.log('user disconnected');
//  });
//});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(5000, function () {
  console.log('App listening on port 5000!');
});
