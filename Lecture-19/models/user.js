const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true,
        trim:true
    },
    name:{
        required:true,
        type:String,
        trim:true
    },
    password:{
        required:true,
        type:String
    },
    movie:{
        type:String,
        trim:true
    }
})

UserSchema.pre('save',function(next){
    // Whichever user we are about to add inside the mongoDB, we can get the user here itself using this
    let user = this
    bcrypt.hash(user.password, 10, function(err, hash) {
       if(err) return next(err)
       user.password = hash
       next()
    })
})

const User = mongoose.model('User',UserSchema)
module.exports = User