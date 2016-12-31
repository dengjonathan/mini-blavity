const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const router = require('../routes/router');

app.use('/', router);

const server = http.Server(app);

module.exports = {
  server,
  app
};