const express = require('express')
const app = express()
const route = require('./routes/index')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// mongodb connection
mongoose.connect('mongodb://localhost:27017/movies')
const db = mongoose.connection
db.on('error', err=>{
    console.error(err)
})

app.use(session({
    secret: 'bjksdbsfsdkfnksfjkskfksjdkfsbfbksdbfks',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}))

app.use((req,res,next)=>{
    res.locals.currentUser = req.session.userID
    next()
})

app.set('view engine','hbs')
app.use('/',route)

// Error Handler - Middleware
// This should be the last middle ware
app.use((err,req,res,next)=>{
    res.render('error',{title:'error',message:err.message})
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})