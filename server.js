var express = require('express');
var app = express();
var imgSearchController = require('./controllers/imgSearchController');
var SearchHistoryController = require('./controllers/sHistoryController');
var mongoose = require('mongoose');

var mongouri = process.env.MONGOLAB_URI || "mongodb://" + "127.0.0.1" + ":27017/img-search";
mongoose.connect(mongouri);

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.render('index');
});

imgSearchController(app);
SearchHistoryController(app);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("listening")
});
