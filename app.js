var express = require("express");
var bodyParser = require("body-parser");
var user = require("./user");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "/html")));
app.use(bodyParser.json());

app.post("/signin", function(req, res) {
  var user_name = req.body.email;
  var password = req.body.password;
  if (user_name == "admin" && password == "admin") {
    res.send("success");
  } else {
    res.send("Failure");
  }
});

app.post("/signup", function(req, res) {
  user.signup("", "", "");
  console.log(res);
});
app.listen(7777, function() {
  console.log("Started listening on port", 7777);
});
