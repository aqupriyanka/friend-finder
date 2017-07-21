/**This class handles all the html routes */


"use strict";

(function(){
	var path = require("path");

	module.exports = function(app){

		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname,path.normalize("../public/home.html")));

		});

		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(__dirname, path.normalize("../public/survey.html")));
		});

	}
})();
