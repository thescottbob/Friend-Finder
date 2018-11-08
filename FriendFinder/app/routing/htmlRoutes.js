// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

app.get('/app/public/survey', function (req, res) {
    res.send('Hello World')
  })


// if/else statement?

  app.get('/home.html', function (req, res) {
    res.send('Hello World')
  })