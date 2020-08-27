const express = require('express')
const route = express.Router()
const {Users} = require('../db')

route.get('/',(req,res)=>{
    return res.render('login')
})

route.post('/',(req,res)=>{
    Users.findOne({
        where:{username:req.body.username}
    }).then((user)=>{
        if(user.password != req.body.password){
            return res.redirect('/login')
        }
        return res.redirect('/profile')
    }).catch((err)=>{
        throw err
    })
})

module.exports = {
    route
}