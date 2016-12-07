const db = require('../utils/config');
const Machine = require('../models/machine');

const Machines = new db.Collection();

Machines.model = Machine;

module.exports = Machines;
