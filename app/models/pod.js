const db = require('../config');

module.exports = db.Model.extend({
  tableName: 'pods',
  hasTimestamps: true
});
