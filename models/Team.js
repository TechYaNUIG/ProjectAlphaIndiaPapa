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
    members:[{
        user_id:String,
        user_name: String

    }]
});

var User = mongoose.model('Team',TeamSchema);

module.exports = User;