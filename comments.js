// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

var comments = require('./comments.json');

app.get('/comments', function (req, res) {
    res.json(comments);
});

app.post('/comments', jsonParser, function (req, res) {
    comments.push(req.body);
    fs.writeFile('./comments.json', JSON.stringify(comments), function (err) {
        if (err) {
            console.log(err);
            res.status(500).send('Error saving comment');
        } else {
            res.status(201).send('Comment saved');
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});