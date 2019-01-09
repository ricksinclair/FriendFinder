//Dependencies//
var express = require("express");
var path = require("path");

//Initialize express//
var app = express();
var PORT = process.env.port || 3000;

//Initialize data parsing features//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
