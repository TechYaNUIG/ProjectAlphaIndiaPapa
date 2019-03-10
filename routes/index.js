var express = require('express');
var router = express.Router();
var passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
var Message = require('../models/Message');
var Task = require('../models/tasks');

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res) => {
    var currUser = req.user.name;

    Message.find({}).sort('date').exec(function(err,messages){
        messages.forEach(function(msg){
            if(msg.user_name === currUser)
            {
                msg.style = 'msg-sent';
                msg.user_name = 'You';
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
    message.colour = req.user.colour;
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
router.post('/add-task-message', ensureAuthenticated, (req, res, next) => {
    message = new Message();
    message.user_name = req.user.name;
    message.text = req.body;
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
                msg.user_name = 'You';
            }else{
                msg.style = 'msg-received';
            }
            
            if(msg.text.includes("New task created:")){
                msg.style = 'msg-task-created';
            }
        });
        res.json(messages);
    }); 
});

router.get('/get-user', ensureAuthenticated, (req,res,next)=>{
    var currUser = req.user.name;
    var currColour = req.user.colour;
    res.json({
        "user_name":currUser,
	"colour": currColour
    });
});

router.post('/addTask',function(req, res, next){
    task = new Task(req.body);
    task.user_name = req.user.name;
    task.save(function(err, savedTask){
        if (err) 
            throw err;
        res.json({
            "id": savedTask._id
        });
    });
});

router.get('/getTasks', function(req, res, next){
    Task.find({}, function (err, tasks) {
        if (err)
            res.send(err);

        res.json(tasks);
    }).sort({completed: 1}).sort({date_created:-1});
});

router.delete('/removeTask/:id', function(req, res, next){
    var id = req.params.id;

    Task.remove({_id:id}, function (err, task) {
        if (err)
            res.send(err);

        res.json(task);
    });
});

router.patch('/completeTask/:id', function(req, res, next){
    var id = req.params.id;

    Task.findOne({_id:id},function(err,task){
        task.completed =!task.completed;
	task.completed_user_name =req.user.name;
        task.save(function(err,updatedTask){
            if(err)
            throw err;
        });
    });
});

module.exports = router;
