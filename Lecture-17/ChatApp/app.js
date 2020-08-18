const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)
let mapping = {}

app.use('/',express.static(__dirname+'/static'))

io.on('connection',(socket)=>{
    console.log('Connection Established '+socket.id)
    socket.emit('successfull',{
        msg:"Connected Succcessfully"
    })
    socket.on('sending-msg',(data)=>{
        console.log(socket.id + ' says '+ data.msg)
        io.emit('recieved-msg',{
            msg:data.msg,
            name:mapping[socket.id] 
        })
    })
    
    socket.on('login',(data)=>{
        mapping[socket.id] = data.name
        socket.emit('login-success')
    })
})

server.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})
