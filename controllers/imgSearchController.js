// "use strict"
var googleImages = require('../helpers/googleimageApi');
var sHistoryModel = require('../models/searchHistoryModel');
var bodyParser = require('body-parser');


module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.get('/api/imagesearch/:search', function(req, res) {
         var newSHistory = sHistoryModel({
                term: req.params.search,
                when: new Date()
            });

            newSHistory.save(function(err) {
                if (err) throw err;
            });
         
        var client = googleImages('006691195374266956646:om2rxwdtyx8', 'AIzaSyDxbDjxJ48zAYXCl6zvfZ3fKDBtSfqnzkM');

        client.search(req.params.search, {
                page: req.query.offset
            })
            .then(function(images) {
                    [{
                        url: "https://i.ytimg.com/vi/tRzXptpC3_U/hqdefault.jpg",
                        snippet: "funny lolcats and loldogs",
                        thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_dKvb6pMA0bod00g0v1Bk3YakSY7H4HYwpu268AqUK8pPiSdlUh9pEnYh",
                        context: "https://www.youtube.com/watch?v=tRzXptpC3_U"
                    }]
                    
                    res.send(images)
                }
            );
    })
}