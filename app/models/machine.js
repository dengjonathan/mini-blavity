const db = require('../utils/config');

module.exports = db.Model.extend({
  tableName: 'machines',
  hasTimestamps: true
});
