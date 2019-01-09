//Dependencies//
var express = require("express");
var path = require("path");

module.exports = function(app) {
  //API Routes//
  app.get("/api/friends", function(req, res) {
    res.send("friends");
  });

  //Initialize data parsing features//
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
