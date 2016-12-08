const machines = require('../collections/machines');
const pods = require('../collections/pods');

const getSmallestSize = sorted => sorted.filter(
  (each, _, all) => each.attributes.size === all[0].attributes.size
);

const getMachineXSell = (type, cb) => pods.query({where: {type}})
  .orderBy('size')
  .fetch()
  .then(xsells => cb(getSmallestSize(xsells)));

// MACHINES
exports.getAllMachines = cb => machines.fetch().then(cb);

exports.getMachineBySku = (sku, cb) => machines.query({where: {sku}})
  .fetchOne()
  .then(machine => {
    if (!machine) {
      cb('that query was not found');
    }
    getMachineXSell(machine.attributes.size, xsells => cb({
      item: machine,
      xsells: xsells
    }));
  });

exports.getMachineByType = (type, cb) => machines.query({where: {type}})
  .fetch()
  .then(cb);

exports.getMachineBySize = (size, cb) => machines.query({where: {size}})
  .fetch()
  .then(cb);

// PODS
exports.getAllPods = cb => pods.fetch().then(cb);

exports.getPodBySku = (sku, cb) => pods.query({where: {sku}})
  .fetchOne()
  .then(pod => {
    if (!pod) {
      cb('that query was not found');
    }
    cb(pod);
  });

exports.getPodsByType = (type, cb) => pods.query({where: {type}})
  .fetch()
  .then(cb);

exports.getPodsBySize = (size, cb) => pods.query({where: {size}})
  .fetch()
  .then(cb);

exports.getPodsByFlavor = (flavor, cb) => pods.query({where: {flavor}})
  .orderBy('size')
  .fetch()
  .then(all => cb(getSmallestSize(all)));
