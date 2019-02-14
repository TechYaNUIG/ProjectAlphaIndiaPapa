var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Load User Model
var User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({usernameField:'name'},(name,password,done)=>{
            User.findOne({name:name})
            .then(user=>{
                if(!user){
                    return done(null,false,{message:"User does not exist"});
                }

                //Match password
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(err) throw err;

                    if(isMatch){
                        return done(null,user);
                    }
                    else{
                        return done(null,false,{message:'Password incorrect'});
                    }
                });
            })
            .catch(err=>console.log(err));
        })
    );
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });
}