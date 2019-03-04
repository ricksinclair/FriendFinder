//Dependencies//
var express = require("express");

//require mysql node module https://www.npmjs.com/package/mysql
var mysql = require("mysql");

//set Up connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

module.exports = function(app) {
  //API Routes//
  app.get("/api/friends", function(req, res) {
    res.send("friends");
    //Get data from database

    //map data
    //store it in object
    //send object as response to the user
  });

  //Initialize data parsing features//
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
