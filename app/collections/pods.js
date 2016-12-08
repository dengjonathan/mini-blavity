const db = require('../utils/database');
const Pod = require('../models/pod');

const Pods = new db.Collection();

Pods.model = Pod;

module.exports = Pods;
