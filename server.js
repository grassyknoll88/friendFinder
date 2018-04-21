var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
require("./app/routing/apiRoutes.js")(app, bodyParser);
require("./app/routing/htmlRoutes.js")(app);
=======
require("./routing/apiRoutes.js")(app, bodyParser);
require("./routing/htmlRoutes.js")(app);
>>>>>>> 80c0781a91c3cc1cc4f28bc4361e36a0c9570bcc

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
