const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    return res.render('profile',{
        user:req.user
    })
})

module.exports = {
    route
}