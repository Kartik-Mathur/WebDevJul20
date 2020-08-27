const express = require('express')
const app = express()
const {db} = require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

app.use('/login',require('./routes/login').route) // /login/.... or /login/abc/a or /login
app.use('/signup',require('./routes/signup').route) 


db.sync()
    .then(()=>{
        app.listen(4444,()=>{
            console.log('Server started at http://localhost:4444')
    })
})