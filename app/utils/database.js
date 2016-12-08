const path = require('path');
const knex = require('knex')({
  'client': 'sqlite3',
  'connection': {
    'filename': path.join(__dirname, '../../db/coffee.sqlite')
  },
  'useNullAsDefault': true
});
let db = require('bookshelf')(knex);

module.exports = db;
