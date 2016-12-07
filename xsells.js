const db = require('../utils/config');
const XSell = require('../models/xsell');

module.exports = new db.Collection({
  model: XSell
});
