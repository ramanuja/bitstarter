var express = require('express');

var app = express.createServer(express.logger());
var buf;
var fs = require('fs');
app.get('/', function(request, response) {
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  response.writeHead(200, headers);
  response.end(data);
  console.log(data);
   
});
return;
//app.get('/', function(request, response) {
  //response.send(JSON.stringify(buf));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
