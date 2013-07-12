var express = require('express');

var app = express.createServer(express.logger());
var buf;
var fs = require('fs');
app.get('/', function(request, response) {
var headers = {'Content-type': 'text/html'};
  fs.readFile('index.html', function (err, data) {
  if (err) {
      response.writeHead(200, headers);
      response.end('We encountered an error');
      return;
  }  
 
  response.writeHead(200, headers);
  response.end(data);
  console.log(data);
   
});
return;
*/
//app.get('/', function(request, response) {
  //response.send(fs.readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
