const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy({usernameField:'email'},(email, password, done)=>{
      User
      .findOne({email})
      .then(user => {
        if(!user) return done(null, false, {message:'無此帳號！'})
        return bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) done(null, false, {message:'密碼與確認密碼不同。'})
            return done(null, user)
          })
      })
      .catch(err => done(err, false))
    }
  ))

  passport.use(new FacebookStrategy({
    clientID: '923738258289788',
    clientSecret: '798aedbd80601ef5a3231f5d06f9596e',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['displayName', 'email']
  }, (accessToken, refreshToken, profile, done)=>{
      const {name, email}=profile._json
      User
        .findOne({email})
        .then(user => {
          if(user) return done(null, user)
          const randomPassword = Math.random().toString(36).slice(-8)
          return bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(randomPassword, salt))
            .then(hash => User.create({
              name,
              email,
              password: hash
            }))
            .then(user => done(null, user))
            .catch(err => done(err, false))
        })
    }
  ))

  passport.serializeUser((user, done) =>{
    done(null, user.id)
  })

  passport.deserializeUser((id, done) =>{
    User
      .findById(id)
      .lean()
      .then(user=>done(null, user))
      .catch(err => done(err, false))
  })

}