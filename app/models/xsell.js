const db = require('../config');

module.exports = db.Model.extend({
  tableName: 'xsell',
  hasTimestamps: true
});
