var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    user_name: {type: String},
    task: {type: String},
    date_created: {type: Date, default: new Date()},
    commpleted: {type: Boolean}
});

module.exports = mongoose.model('Task', tasksSchema);