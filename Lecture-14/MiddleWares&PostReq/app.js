const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

function m1(req,res,next){
    console.log('Running m1')
    console.log(req.url)
    // console.log(req.query)

    if(req.query.m == 1){
        return res.send('Some random response')
    }
    // else{
        next()
    // }
}

function m2(req,res,next){
    console.log('Running m2')
    next()
}

function m3(req,res,next){
    console.log('Running m3')
    next()
}

app.use('/bye',m1) // Path Specific
app.use(m2) // This is global
app.use(m3)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html') 
})

app.get('/bye',(req,res)=>{
    res.send("Sending Response Bye") 
})

app.post('/',(req,res)=>{
    console.log(req.body)
    // console.log(req.body.kartik)
    res.send("Post request Success")
})

app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444")
})