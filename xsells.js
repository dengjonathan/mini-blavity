const db = require('../config');
const XSell = require('./models/xsell');

module.exports = db.Collection.extend({
  model: XSell
});
