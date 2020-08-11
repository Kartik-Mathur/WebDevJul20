const express = require('express')
const route = express.Router()
let teachers = []

route.get('/',(req,res)=>{
    if(req.query.id){
        for(let i = 0 ; i < teachers.length ; i++){
            if(teachers[i].id == req.query.id){
                 return res.send(teachers[i])
            }
        }
    }
    res.send(teachers)
})

route.post('/',(req,res)=>{
    teachers.push({
        name:req.body.name,
        id:req.body.id
    })
    res.send('success')
})

module.exports = {
    route
}