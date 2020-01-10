const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
var app = express();
var port;

// Make this app find files for the public eyes - e.g css
app.use(express.static("public"));
// Make this app find html files
app.set("views", "static");
app.set("view engine", "ejs");

if (port == null || port === "") {
  port = 8080;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This route processes GET requests to "/"`
app.get("/", function(req, res) {
  var url = "https://dankore.github.io/JSONCodingChallenge/elements";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render("index", { data });
    })
    .catch(err => {
      res.send(err);
    });
});

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
