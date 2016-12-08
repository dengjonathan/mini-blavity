const db = require('../utils/database');

module.exports = db.Model.extend({
  tableName: 'pods',
  hasTimestamps: true
});
