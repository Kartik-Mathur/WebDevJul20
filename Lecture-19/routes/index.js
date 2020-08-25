const express = require('express')
const route = express.Router()
const User = require('../models/user')
// Get /profile
route.get('/profile',(req,res,next)=>{
    // return res.render('profile',{title:'Profile'})
    return res.send('Profile Page')
})

// GET /login
route.get('/login',(req,res,next)=>{
    return res.render('login',{title:'Log In'})
})

// Get /register
route.get('/register',(req,res,next)=>{
    return res.render('signup',{title:'Sign Up'})
})
// Post /register
route.post('/register',(req,res,next)=>{
    if(req.body.name && req.body.password && req.body.movie && req.body.email){
        var userData = {
            name : req.body.name,
            movie: req.body.movie,
            password: req.body.password,
            email: req.body.email
        }
        User.create(userData,(err,user)=>{
            if(err) return next(err)
            return res.redirect('/profile')
        })
    }
    else{
        let err = new Error('You need to enter all the information')
        err.status = 400
        return next(err)
    }
})

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