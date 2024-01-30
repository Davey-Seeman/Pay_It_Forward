const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const passport = require('passport');

module.exports = function config(users){
    passport.use(new LocalStrategy( async (username, password, done) => {
        const user = users.find(user => user.username === username);
        if (user == null){
            console.log("no user")
            return done(null,false,{message: "No User With That Username"})
        }
        else if (await bcrypt.compare(password, user.password)){
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
        const user = users.find(user => user.id === id);
        if (user){
            return done(null, user);
        } else {
            console.log("no user");
        }
    })

};