var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var keys = require('../config/Keys');

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
    passport.use(
        new GoogleStrategy({
            //options for google strategy
            callbackURL:'/users/google/redirect',
            clientID:keys.google.clientID,
            clientSecret:keys.google.clientSecret
        },(accessToken,refreshToken,profile,done)=>{
            //passport callback function
            User.findOne({googleID:profile.id}).then((currUser)=>{
                if(currUser){
                    return done(null,currUser);
                }else{
                    new User({
                        name:profile.displayName,
                        googleID:profile.id
                   }).save().then((newUser)=>{
                        console.log('new user created: '+newUser);
                        done(null,newUser);
                   });
                }
            });

           
        })
    )
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });
}