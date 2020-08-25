const express = require('express')
const app = express()
const route = require('./routes/index')
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.use('/',route)

// mongodb connection
mongoose.connect('mongodb://localhost:27017/movies')
const db = mongoose.connection
db.on('error', err=>{
    console.error(err)
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})