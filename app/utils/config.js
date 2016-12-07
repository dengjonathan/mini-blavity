const path = require('path');
const knex = require('knex')({
  'client': 'sqlite3',
  'connection': {
    'filename': path.join(__dirname, '../../db/coffee.sqlite')
  },
  'useNullAsDefault': true
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('clicks').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('clicks', function (click) {
      click.increments('id').primary();
      click.integer('linkId');
      click.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});
db.knex.schema.createTable('machines', machine => {
  machine.string('sku', 100).primary();
  machine.string('type', 255); // base, premium, deluxe
  machine.string('size', 100); // small, medium, large
  machine.boolean('compatible');
  machine.timestamps();
});

db.knex.schema.createTable('pods', pod => {
  pod.string('sku', 100).primary();
  pod.string('type', 255);
  pod.string('flavor', 255);
  pod.integer('size'); // 12, 24, 36
  pod.timestamps();
});

db.knex.schema.createTable('xsells', xsell => {
  xsell.increments('id').primary();
  xsell.integer('sku_machines');
  xsell.integer('sku_pods');
  xsell.timestamps();
  resolve(pod);
});

module.exports = db;
