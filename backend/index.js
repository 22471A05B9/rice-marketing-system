const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./user');
const app = express();

app.use(cors());  // Allow all origins by default, configure as needed
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);

module.exports = app;
