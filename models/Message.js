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
    }
});

var Message = mongoose.model('Message',MessageSchema);
module.exports = Message;