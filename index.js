const express = require("express");
const multer = require("multer");
// import express from 'express';

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.listen(8080, async (req, res) => {
  console.log("App is running on port 8080");
});

// express, nodemon, mongoose, cors, moment, dotenv, bcrypt, jsonwebtoken, passport
