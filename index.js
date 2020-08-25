var express = require('express');
var socket = require('socket.io')
var app = express();

var server  = app.listen( process.env.PORT ||4040,function(){
    console.log("server listening")
})

var io = socket(server);
io.on('connection',function(socket){
    console.log("made socket connection with ",socket.id)

    socket.on("click1",data => {
        
        io.sockets.emit("click1",data)
        
      })
  
      socket.on("click2",data => {
        io.sockets.emit("click2",data)
      })
})