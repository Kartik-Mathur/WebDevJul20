const express = require('express')
const app = express()
const route = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.use('/',route)


app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})