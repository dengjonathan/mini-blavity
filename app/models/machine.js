const db = require('../utils/database');

module.exports = db.Model.extend({
  tableName: 'machines',
  hasTimestamps: true
});
