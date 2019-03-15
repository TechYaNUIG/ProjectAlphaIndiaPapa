var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    members:{
        type:Array,
        default:[]
    }
});

var User = mongoose.model('Team',TeamSchema);

module.exports = User;