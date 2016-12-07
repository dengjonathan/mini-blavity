const path = require('path');
const loadData = require('./loadData');
const knex = require('knex')({
  'client': 'sqlite3',
  'connection': {
    'filename': path.join(__dirname, '../../db/coffee.sqlite')
  },
  'useNullAsDefault': true
});
let db = require('bookshelf')(knex);

db.knex.schema.hasTable('machines')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('machines', machine => {
        machine.string('sku', 100).primary();
        machine.string('type', 255); // base, premium, deluxe
        machine.string('size', 100); // small, medium, large
        machine.timestamps();
      })
        .then(() => loadData.loadMachines());
    }
  });

db.knex.schema.hasTable('pods')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('pods', pod => {
        pod.string('sku', 100).primary();
        pod.string('type', 255); // small, medium, large (should I just store what machine it works in?)
        pod.string('flavor', 255);
        pod.integer('size'); // 12, 24, 36
        pod.timestamps();
      })
        .then(machines => console.log(machines));
    }
  });

db.knex.schema.hasTable('xsells')
  .then(exists => {
    if (!exists) {
      db.knex.schema.createTable('urls', xsell => {
        xsell.increments('id').primary();
        xsell.integer('sku_machines');
        xsell.integer('sku_pods');
        xsell.timestamps();
      })
        .then(machines => console.log(machines));
    }
  });

module.exports = db;
