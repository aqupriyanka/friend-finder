// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var port = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friends (DATA)
// =============================================================

var friends = [
  {
    name : "testUser",
    photo : "http://yugpradesh.com/wp-content/uploads/2016/08/pc-web.jpg",
    scores : [5,1,2,4,1,5,1,3,4,5,2]
  }
];
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app);

var apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app,friends);


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
  app.use('/public', express.static(path.join(__dirname, '/app/public')));
});
