var express = require('express');
var router = express.Router();
var passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
var Message = require('../models/Message');

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res) => {
    var currUser = req.user.name;

    Message.find({}).sort('date').exec(function(err,messages){
        messages.forEach(function(msg){
            if(msg.user_name === currUser)
            {
                msg.style = 'msg-sent';
            }
            else{
                msg.style = 'msg-received';
            }
        });
        res.render('index',{title:'TechYa',message:messages});
    }); 
});

router.post('/add-message', ensureAuthenticated, (req, res, next) => {
    message = new Message();
    var data = req.body;
    message.user_name = req.user.name;
    message.text = data.text;
    message.save((err, savedMessage) => {
        if (err) {
            throw err;
        }
        res.json({
            "id": savedMessage._id,
            "message": savedMessage.message
        });
    });
});

router.get('/get-messages', ensureAuthenticated, (req, res, next) => {
    var currUser = req.user.name;
    Message.find({}).sort('date').exec(function(err,messages){
        messages.forEach(function(msg){
            if(msg.user_name === currUser)
            {
                msg.style = 'msg-sent';
            }
            else{
                msg.style = 'msg-received';
            }
        });
        console.log(messages);
        res.json(messages);
    }); 
});

module.exports = router;
