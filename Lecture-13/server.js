const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send("Hello!")
})

// server.get('/welcome/:name',(req,res)=>{
//     res.send(`Hello! ${req.params.name} Welcome to CB!`)
// })

server.get('/hi',(req,res)=>{
    res.send(`Hi! ${req.query.q} ${req.query.m} Welcome to CB!`)
})

server.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})
