var express = require('express');

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var app = express();

var port = 8887;

app.listen(port, function(){
  console.log('listening on port 8887');
});



function getRandomMessage(){
  var index = 0;

  var toReturn = messages[index];
    placeHolder++;
  return toReturn;
}



app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: messages[1]
  }));
});


// console.log('it works');
