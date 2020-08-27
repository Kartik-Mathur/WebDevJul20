const express = require('express')
const app = express()
const {db} = require('./db')
const session = require('express-session')
const passport = require('./passport')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'nasknjakasbidsamfkropgrwnk',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine','hbs')

app.use('/login',require('./routes/login').route) // /login/.... or /login/abc/a or /login
app.use('/signup',require('./routes/signup').route) 
app.use('/profile',require('./routes/profile').route) 


db.sync()
    .then(()=>{
        app.listen(4444,()=>{
            console.log('Server started at http://localhost:4444')
    })
})