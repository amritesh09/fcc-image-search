var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var shistorySchema = new Schema({
    term: String,
    when: Date
});

var shistoryModel = mongoose.model('shistory', shistorySchema);

module.exports = shistoryModel;