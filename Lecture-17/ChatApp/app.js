const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

app.use('/',express.static(__dirname+'/static'))

io.on('connection',(socket)=>{
    console.log('Connection Established '+socket.id)
    socket.emit('successfull',{
        msg:"Connected Succcessfully"
    })

    socket.on('btn-clicked',()=>{
        console.log(socket.id + ' '+ "Clicked the btn")
        socket.emit('click-success')
    })
})

server.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})
