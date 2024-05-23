// Create web server
// Create a route to handle POST requests to /comments
// Create an object to store comments
// Create a route to handle GET requests to /comments
// Create a route to handle GET requests to /comments/:id
// Create a route to handle PUT requests to /comments/:id
// Create a route to handle DELETE requests to /comments/:id

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = {};

let nextCommentId = 0;

app.post('/comments', (req, res) => {
  const id = nextCommentId++;
  comments[id] = req.body;
  res.status(201).send({ id: id });
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments[req.params.id];
  if (comment) {
    res.send(comment);
  } else {
    res.status(404).send();
  }
});

app.put('/comments/:id', (req, res) => {
  const comment = comments[req.params.id];
  if (comment) {
    comments[req.params.id] = req.body;
    res.send();
  } else {
    res.status(404).send();
  }
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments[req.params.id];
  if (comment) {
    delete comments[req.params.id];
    res.send();
  } else {
    res.status(404).send();
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});