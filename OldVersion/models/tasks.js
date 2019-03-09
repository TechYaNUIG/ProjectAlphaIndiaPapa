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
    date_created: {
        type: Date,
        default: new Date()
    },
    date_due: {
        type: Date,
        default: null
    },
    compleated_user_name: {
        type: String,
	default: "Unassigned"
    },
    commpleted: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task', tasksSchema);