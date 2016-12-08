const db = require('../utils/database');
const Machine = require('../models/machine');

const Machines = new db.Collection();

Machines.model = Machine;

module.exports = Machines;
