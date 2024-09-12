const express = require("express");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const path = require("path");
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(3000, async (req, res) => {
  console.log("App is running on port 3000");
});

// express, nodemon, mongoose, cors, moment, dotenv, bcrypt, jsonwebtoken, passport
