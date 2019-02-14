var express = require('express');
var router = express.Router();
var passport = require('passport');
const {ensureAuthenticated} = require('../config/auth');

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res, next)=>res.render('index', { title: 'TechYa' }));

module.exports = router;
