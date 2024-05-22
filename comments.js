// create web server
// 1. load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// 2. create server
http.createServer(function (request, response) {
  // 3. parse request
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;
  console.log('resource = ' + resource);
  // 4. routing
  if (resource == '/create_comment') {
    // 5. create comment
    // 6. save comment
    // 7. redirect to /page
    create_comment(request, response);
  } else if (resource == '/delete_comment') {
    // 8. delete comment
    // 9. save comment
    // 10. redirect to /page
    delete_comment(request, response);
  } else {
    // 11. read file
    fs.readFile('comment.html', 'utf8', function (error, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    });
  }
}).listen(8000, function () {
  console.log('Server is running...');
});

function create_comment(request, response) {
  var body = '';
  request.on('data', function (data) {
    body = body + data;
  });
  request.on('end', function () {
    var post = qs.parse(body);
    var comment = post.comment;
    var date = post.date;
    var username = post.username;
    var output = `
    <html>
      <head>
        <meta charset='utf-8'>
      </head>
      <body>
        <h1>Comment</h1>
        <div>${comment}</div>
        <div>${date}</div>
        <div>${username}</div>
        <a href='/'>Home</a>
      </body>
    </html>`;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(output);
  });
}

function delete_comment(request, response) {
  var body = '';
  request.on('data', function (data) {
    body = body + data;
  });
  request.on('end', function () {
    var post = qs.parse(body);
    var comment = post.comment;
    var date = post.date;
    var username = post