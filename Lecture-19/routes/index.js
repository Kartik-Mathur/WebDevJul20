const express = require('express')
const route = express.Router()

// Get /
route.get('/',(req,res,next)=>{
    return res.render('index',{title:'Home Page'})
})

// Get /contact
route.get('/contact',(req,res,next)=>{
    return res.render('contact',{title:'Contact'})
})

// Get /about
route.get('/about',(req,res,next)=>{
    return res.render('about',{title:'About'})
})


module.exports = route