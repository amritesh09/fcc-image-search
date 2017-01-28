var shistory = require('../models/searchHistoryModel');

module.exports = function(app) {
    app.get('/api/setupshistory', function(req, res) {
        // seed database
        var starterSurls = [{
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }, {
            "term": "lol cats",
            "when": "2016-03-27T12:02:40.127Z"
        }];
        shistory.create(starterSurls, function(err, results) {
            if (err) throw err;
            res.send(results);
        })
    })
}