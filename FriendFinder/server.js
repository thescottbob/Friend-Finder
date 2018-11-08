  // Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var apiRoutes = ;

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
  app.listen(3000)

  



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        customerName: "Ahmed",
        phoneNumber: "979-587-0887",
        customerEmail: "afhaque89@gmail.com",
        customerID: "afhaque89"
    },
    {
        customerName: "test2",
        phoneNumber: "979-587-0887",
        customerEmail: "afhaque89@gmail.com",
        customerID: "afhaque89"
    },
];
var waitlist = [];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  