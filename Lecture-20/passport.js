const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
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

passport.use(new FacebookStrategy({
    clientID: '2636812766583596',
    clientSecret: 'XXXXXXXXX',
    callbackURL: "http://localhost:4444/login/facebook/callback"
  },
  function(token, rt, profile, done) {
    Users.create({
        username: profile.displayName,
        fbId:profile.id,
        fbToken:token
    }).then((user)=>{
        done(null,user)
    }).catch(done)
  }
))

passport.use(new LocalStrategy((username,password,done)=>{
    Users.findOne({
        where:{username:username}
    }).then((user)=>{
        if(!user || password != user.password) return done(null,false)
        return done(null,user)
    }).catch(done)
}))

module.exports = passport