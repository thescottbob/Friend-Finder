$(document).ready(function(){
  
  $("#begin").on("click", function(app){

    // A GET Route to /survey which should display the survey page.
    app.get("/survey.html", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    })
});
  
  // module.exports = function(app) {};