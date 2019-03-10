var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');
var passport = require('passport');

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/current-user',function(req,res,next){
  res.json({'name':req.user.name});
});

//Register Handle
router.post('/register', (req, res) => {
  const { name, password } = req.body;
  let errors = [];

  User.findOne({ name: name })
    .then(user => {
      if (user) {
        //user exists
        errors.push({ msg: 'User already exists' });
        res.status(401).json({
          "status": "info",
          "body": "User already exists"
        });

      }
      else {
        var newUser = new User({
          name,
          password
        });
        
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            //set password to hash
            newUser.password = hash;
            //save user
            newUser.save(function(err,user){
              if(err) throw err;

              res.json({'success':'account created'});
            })
            
          }));
      }
    });
});

//login handle
router.post('/login',(req,res,next)=>{
  passport.authenticate('local',function(err, user, info) {
    if (err) { return res.status(401).json({
      "status": "info",
      "body": "Error"
    }); }
    if (!user) { return res.status(401).json({
      "status": "info",
      "body": "Incorrect username or password"
    }); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return  res.json({'success':'Logged in'});
    });
  })(req, res, next);
});

//logout handle
router.get('/logout',(req,res)=>{
  var outuser = req.user.name;
  req.logOut();
  console.log(outuser);
  res.json({'success':'Logged out '+outuser});
});

//change user colour
router.patch('/change_colour/:id', function(req, res, next){
    var id = req.params.id;
   var c = req.body.colour;
   User.findOne({_id:id},function(err,user){
	user.colour = c;
        user.save(function(err,updatedUser){
            if(err)
            throw err;
        });
    });

  res.json({'success':'Colour for user changed from '+c});
});

module.exports = router;
