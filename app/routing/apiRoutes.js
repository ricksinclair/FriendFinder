//Dependencies//
var express = require("express");
import { Friends } from "/data/friends";
module.exports = function(app) {
  //API Routes//
  app.get("/api/friends", function(req, res) {
    res.send(Friends);
    //Get data from database

    //map data

    //store it in object

    //send object as response to the user
  });

  //Initialize data parsing features//
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
