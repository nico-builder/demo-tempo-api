const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const API_URL = "/api/v1";

// load routes
const videoRoutes = require('./routes/video');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// for parsing application/json
app.use(bodyParser.json());

// GET static videos
app.use('/videos', express.static(path.join(__dirname, 'videos')));

////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(API_URL + "/video", videoRoutes);






module.exports = app;
