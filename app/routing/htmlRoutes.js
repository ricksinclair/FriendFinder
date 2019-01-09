//Dependencies//
var express = require("express");
var path = require("path");

//Have to set these routes so they may be exported to server.js

module.exports = function(app) {
  //HTML Routes//
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
