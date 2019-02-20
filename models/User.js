var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    colour:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User',UserSchema);

module.exports = User;