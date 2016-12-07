const db = require('../config');
const Pod = require('./models/pod');

module.exports = db.Collection.extend({
  model: Pod
});
