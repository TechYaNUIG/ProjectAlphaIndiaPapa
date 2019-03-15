var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    style:{
        type:String,
        default:null
    },
    colour:{
        type:String,
        default:null
    },
    team_id:{
        type:String,
        required:true
    }

});

var Message = mongoose.model('Message',MessageSchema);
module.exports = Message;