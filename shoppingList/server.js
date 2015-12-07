var express = require('express');
var mongojs = require('mongojs');
var uri = 'mongodb://heroku_6mknnz2c:9fsqig20k1jquknhjbc87lm6gs@ds061354.mongolab.com:61354/heroku_6mknnz2c';
var db = mongojs(uri,['itemList']);
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/itemList', function (req,res) {
	console.log('Received a GET request');
	db.itemList.find(function (err,docs) {
		res.json(docs);
	});
});

app.post('/itemList', function (req,res) {
	db.itemList.insert(req.body, function (err,doc) {
		res.json(doc);
	});
});

app.delete('/itemList/:id', function (req, res) {
  var id = req.params.id;
  db.itemList.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/itemList/:id', function (req, res) {
  var id = req.params.id;
  db.itemList.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.listen(process.env.PORT || 5000)
console.log('Server running on port 5000')