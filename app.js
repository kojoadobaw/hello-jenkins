var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
var moko = 123;
var shiw = 456;
console.log("Welcome to MokoShiw");
