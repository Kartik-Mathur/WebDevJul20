const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {Tasks,db} = require('./db')

app.get('/todos',async (req,res)=>{

    let whereObject = {}
    if(req.query.done){
        whereObject.done = req.query.done == 'true'
    }
    // else{
    //     x = false
    // }

    let data = await Tasks.findAll({
        where:whereObject
    })

    res.send(data)
})

app.post('/todos',async(req,res)=>{
    let data = await Tasks.create({
        name:req.body.name,
        done:req.body.done||false
    })
    res.send(data)
})

db.sync()
    .then(()=>{
        app.listen('4444',()=>{
            console.log('Server started at http://localhost:4444')
        })
    })
