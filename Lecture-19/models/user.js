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

UserSchema.statics.authenticate = (email,password,cb)=>{
    User.findOne({email})
        .exec((err,user)=>{
            if(err) return cb(err)
            else if(!user) {
                let err = new Error('User Not Found!')
                err.status = 401
                return next(err)
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) return cb(err)
                if(result == true)
                    return cb(null,user)
            })
        })
}

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