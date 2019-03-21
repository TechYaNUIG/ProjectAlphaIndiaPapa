var express = require('express');
var router = express.Router();
var passport = require('passport');
const {
    ensureAuthenticated
} = require('../config/auth');
var Message = require('../models/Message');
var Task = require('../models/tasks');
var Team = require('../models/Team');
var User = require('../models/User');

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res) => {
    var currUser = req.user.name;

        res.render('index', {
            title: 'TechYa'});
});


//Create a Team
router.post('/create-team', ensureAuthenticated, (req, res, next) => {
    team = new Team();
    var currId = { user_id: req.user._id };
    var data = req.body;
    team.name = data.name;
    data.members.forEach(function (element) {
        team.members.push(element);
    });
    team.members.push(currId);
    console.log(team);

    team.save((err, createdTeam) => {
        if (err) {
            throw err;
        }

        res.json({
            "id": createdTeam,
            "message": createdTeam.name
        });
    });
});

//get all teams for current user
router.get('/get-teams', ensureAuthenticated, (req, res, next) => {
    var userId = req.user._id;
    Team.find({
        "members.user_id": userId
    }, (err, teams) => {
        if (err)
            throw err;
        res.json(teams);
    });
});

router.post('/add-message/:id', ensureAuthenticated, (req, res, next) => {
    message = new Message();
    var teamId = req.params.id;
    var data = req.body;
    message.user_name = req.user.name;
    message.text = data.text;
    message.colour = req.user.colour;
    message.team_id = teamId;
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
router.post('/add-task-message/:id', ensureAuthenticated, (req, res, next) => {
    message = new Message();
    message.user_name = req.user.name;
    message.text = req.body;
    message.team_id = req.params.id;
    message.save((err, savedMessage) => {
        if (err) {
            console.log(err.message);
        }
        res.json({
            "id": savedMessage._id,
            "message": savedMessage.message
        });
    });
});

router.get('/get-messages/:id', ensureAuthenticated, (req, res, next) => {
    var teamId = req.params.id;
    var currUser = req.user.name;
    Message.find({
        "team_id": teamId
    }).sort('date').exec(function (err, messages) {
        messages.forEach(function (msg) {
            if (msg.user_name === currUser) {
                msg.style = 'msg-sent';
                msg.user_name = 'You';
            } else {
                msg.style = 'msg-received';
            }

            if (msg.text.includes("New task created:")) {
                msg.style = 'msg-task-created';
            }
        });
        res.json(messages);
    });
});

router.get('/get-user', ensureAuthenticated, (req, res, next) => {
    var currUser = req.user.name;
    var currColour = req.user.colour;
    var currId = req.user._id;
    console.log(currUser);
    res.json({
        "user_name": currUser,
        "colour": currColour,
        "_id": currId
    });
});

router.get('/search-users/:search_string', ensureAuthenticated, (req, res, next) => {
    var searchString = req.params.search_string;
    User.find({$text:{$search:searchString}}, (err, user) => {
        if (err)
            throw err;

            console.log(user);
        res.json(user);
    });
});

router.post('/addTask/:id', function (req, res, next) {
    task = new Task(req.body);
    task.user_name = req.user.name;
    task.team_id = req.params.id;
    task.save(function (err, savedTask) {
        if (err)
            throw err;
        res.json({
            "id": savedTask._id
        });
    });
});

router.get('/getTasks/:id', function (req, res, next) {
    var teamId = req.params.id;
    Task.find({
        team_id: teamId
    }, function (err, tasks) {
        if (err)
            res.send(err);

        res.json(tasks);
    }).sort({
        completed: 1
    }).sort({
        date_created: -1
    });
});

router.get('/get-userTasks/',ensureAuthenticated, function(req,res,next){
    Task.find({ "members.user_id": req.user._id},function(err,tasks){
        if(err)
            res.send(err);

           
        res.json(tasks);
    }).sort({completed:1}).sort({date_created:-1});
});

router.delete('/removeTask/:id', function (req, res, next) {
    var id = req.params.id;
    var currUser = req.user.name;
    Task.findOneAndDelete({
        _id: id,
        user_name: currUser
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        if (task) {
            res.json(task);
        } else {
            res.status(401).json({
                "status": "info",
                "body": "You are not permitted to delete this task"
            });

        }
    });
});

router.patch('/completeTask/:id', function (req, res, next) {
    var id = req.params.id;
    Task.findOne({
        _id: id
    }, function (err, task) {
        task.completed = !task.completed;
        task.completed_user_name = req.user.name;
        task.save(function (err, updatedTask) {
        if (err)
                throw err;
        });
        if (task) {
		if(task.completed){
  		res.json({'success':'Task Completed'});}
		if(!task.completed){
  		res.json({'success':'Task Set In-Complete'});}
        }
    });
});
router.patch('/joinTask/:id', function (req, res, next) {
    var id = req.params.id;
    var currUser = req.user.name;
    var newUser = {user_id: req.user._id, user_name: req.user.name};

    Task.findOne({_id:id, "members.user_id": req.user._id}).then(task=>{
        if(task)
        {
            res.status(401).json({
                "status": "info",
                "body": "You are already in this task group"
            });
        }
        else{
            Task.updateOne({_id:id},{$push:{members:newUser}},function(err,task){
                if(err)
                {
                    throw err;
                }

                res.json(task);
            });
        }
    }).catch(function(err){
        console.log(err);
    });
});


module.exports = router;