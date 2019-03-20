var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    user_name: {
        type: String,
	    default: "Unassigned"
    },
    task: {
        type: String
    },
    members: [{
        user_id:String,
        user_name: String
    }],
    date_created: {
        type: Date,
        default: new Date()
    },
    date_due: {
        type: Date,
        default: null
    },
    completed_user_name: {
        type: String,
	default: "Unassigned"
    },
    completed: {
        type: Boolean,
        default:false
    },
    team_id:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Task', tasksSchema);