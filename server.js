//Dependencies//
let express = require("express");
let bodyParser = require("body-parser");

//Initialize express//
let app = express();
let PORT = process.env.PORT || 3000;
let apiRoutes = require("./app/routing/apiRoutes")(app);
let htmlRoutes = require("./app/routing/htmlRoutes")(app);
apiRoutes;
htmlRoutes;
//Body Parser references
let jsonParser = bodyParser.json();
let urlEncoded = bodyParser.urlencoded({ extended: false });
let rawParser = bodyParser.raw();
let textParser = bodyParser.text();
//I had some questions on the need for body-parser if node already can send/receive data without using it
//apparently it used to be part of the core express package but it was seprarated to give devs more control.
//it can unzip and parse all sorts of data without needing to manipulate every little field.
//it has 4 methods,
//.raw() just exposes buffered content on req.body
//.text()  reads buffer as plain text and exposes on req.body
//.urlencoded() parses text as url encoded data (like how a browser sends form data)
//.json parses text as json and exposes it to req. body

//set up body parser for json
app.use(bodyParser.json({ type: "application/**json" }));

//set up bodyparser for raw content

//the .vnd spec allows vendors to specify their own media types for transmission online(formerly known as MIME types)
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

app.use(bodyParser.text({ type: "text/html" }));

//set express server to listen on PORT reference
app.listen(PORT, function() {
  console.log(`The Friend Finder App is now listening on PORT ${PORT}`);
});
