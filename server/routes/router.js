const express = require('express');
const path = require('path');

const handlers = './routeHandlers';

const router = express.Router();

// MIDDLEWARES
router.use(express.static(path.join(__dirname, '../../client/build')));

// ROUTES
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')));

module.exports = router;