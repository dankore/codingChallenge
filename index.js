const express = require("express");
const router = require('./router')
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

app.use('/', router)

var listener = app.listen(port, function() {
  console.log("Listening on port " + listener.address().port);
});

