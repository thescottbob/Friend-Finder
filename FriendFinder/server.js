  // Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// var apiRoutes = ;

app.get('/', function (req, res) {
    res.send('Hello World!')
  })
   
  app.listen(3000, function(){
    console.log("Listening on PORT: " + PORT);
  })
  