const http = require('http');
const path = require('path');
const express = require('express');

// modules export factory functions instead of instances
const initSocket = require('./socketConfig');
const initRouter = require('../routes/router');

const app = express();
const server = http.Server(app);

// init socket.io client and router with proper references
const io = initSocket(server);
const router = initRouter(io);

app.use('/', router);

module.exports = {
  server,
  app,
  io
};
