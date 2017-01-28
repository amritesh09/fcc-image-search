var sHistoryModel = require('../models/searchHistoryModel');

module.exports = function(app) {
    app.get('/api/latest/imagesearch/', function(req, res) {
        sHistoryModel.find({}, {"_id":0,"term":1,"when":1},function(err, shistoryfound) {
            if (err) {
                res.end("error")
            }
            else {
              res.end(JSON.stringify(shistoryfound))  
            }
        }).limit(10).sort({ when: -1 })
        
    })
};