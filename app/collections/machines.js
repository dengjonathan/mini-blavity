const db = require('../config');
const Machine = require('./models/machine');

module.exports = db.Collection.extend({
  model: Machine
});
