// create web server
// create a route for comments
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete

var express = require('express');
var app = express();
var port = 3000;

// create a route for comments
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// create a route for comments/:id
app.get('/comments/:id', function(req, res) {
  res.send('This is the comment page for comment id: ' + req.params.id);
});

// create a route for comments/:id/edit
app.get('/comments/:id/edit', function(req, res) {
  res.send('This is the edit page for comment id: ' + req.params.id);
});

// create a route for comments/:id/delete
app.get('/comments/:id/delete', function(req, res) {
  res.send('This is the delete page for comment id: ' + req.params.id);
});

app.listen(port, function() {
  console.log('Server is running on port', port);
});