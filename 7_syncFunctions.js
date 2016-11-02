var fs = require('fs');
var express = require('express');
var http = require('http');

// Setup server
var app = express();
var server = http.createServer(app);
server.listen(8080, '0.0.0.0', function() {
  console.log('Express server listening on %d', 8080);
});

// var file = fs.readFileSync('media/movie.mp4');
// file = fs.readFileSync('media/movie.mp4');
// file = fs.readFileSync('media/movie.mp4');
// console.log("Done");

fs.readFile('media/movie.mp4', (err, data) => {
  fs.readFile('media/movie.mp4', (err, data) => {
    fs.readFile('media/movie.mp4', (err, data) => {
      console.log("Done");
    });
  });
});
