const path = require('path');
const knex = require('knex')({
  'client': 'sqlite3',
  'connection': {
    'filename': path.join(__dirname, '/coffee.sqlite')
  },
  'useNullAsDefault': true
});
let db = require('bookshelf')(knex);

db.knex.schema.hasTable('machines')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('machines', (link) => {
        link.string('id', 100).primary(); // TODO: allocate appropriate size
        link.string('type', 255);
        link.integer('product_id');
        link.timestamps();
      });
    }
  });

db.knex.schema.hasTable('pods')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('pods', (link) => {
        link.string('sku', 100).primary(); // TODO: allocate appropriate size
        link.string('type', 255);
        link.integer('product_id');
        link.timestamps();
      });
    }
  });

db.knex.schema.hasTable('machines')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('urls', (link) => {
        link.string('sku', 100).primary(); // TODO: allocate appropriate size
        link.string('type', 255);
        link.integer('product_id');
        link.timestamps();
      });
    }
  });

module.exports = db;
