const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {Users} = require('./db')

passport.serializeUser(function(user, done) {
    done(null, user.id)
})
   
passport.deserializeUser(function(userId, done) {
    Users.findOne({
        where:{id:userId}
    }).then((user)=>{
        done(null,user)
    }).catch(done)
})

passport.use(new LocalStrategy((username,password,done)=>{
    Users.findOne({
        where:{username:username}
    }).then((user)=>{
        if(!user || password != user.password) return done(null,false)
        return done(null,user)
    }).catch(done)
}))

module.exports = passport