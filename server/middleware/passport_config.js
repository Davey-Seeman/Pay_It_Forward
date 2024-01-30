const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const passport = require('passport');

module.exports = function config(users){
    passport.use(new LocalStrategy( (username, password, done) => {
        const user = users.find(user => user.username === username);
        if (user == null){
            console.log("no user")
            return done(null,false,{message: "No User With That Username"})
        }
        else if (bcrypt.compare(user.password, password)){
            console.log("found user")
            return done(null, user)
        }
        else {
            console.log("wrong password")
            return done(null,false,{message: "Password Incorrect"})
        }
    }));
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        try {
            const user = users.find(user => user.id === id)
            return done(null, user)
        } catch (e) {
            console.log("no user")
        }
    })

};