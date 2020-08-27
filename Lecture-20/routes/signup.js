const express = require('express')
const route = express.Router()
const {Users} = require('../db')

route.get('/',(req,res)=>{
    return res.render('signup')
})

route.post('/',(req,res)=>{
    Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then((user)=>{
        return res.redirect('/login')
    }).catch((err)=>{
        throw err
    })
})

module.exports = {
    route
}