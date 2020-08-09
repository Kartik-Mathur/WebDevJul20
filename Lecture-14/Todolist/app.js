const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let tasks = []
app.use('/',express.static(__dirname+'/Static'))

app.get('/hi',(req,res)=>{
    res.send(tasks)
})

app.post('/hi',(req,res)=>{
    tasks.push({
        id:req.body.id || 0,
        name:req.body.name
    })
    res.send('done')
})

app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444")
})