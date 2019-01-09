//Dependencies//
var express = require("express");

//Initialize express//
var app = express();
var PORT = process.env.port || 3000;
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`The Friend Finder App is now listening on PORT ${PORT}`);
});
