const http = require('http');
const path = require('path');
const express = require('express');

const initSocket = require('./socketConfig');
const initRouter = require('../routes/router');

const app = express();
const server = http.Server(app);
const io = initSocket(server);
const router = initRouter(io);

app.use('/', router);

module.exports = {
  server,
  app,
  io
};
