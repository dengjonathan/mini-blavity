const _ = require('lodash');

const Machines = require('../collections/machines');
const Pods = require('../collections/pods');

const getSmallestSize = sorted => sorted.filter(
  (each, _, all) => each.attributes.size === all[0].attributes.size
);

const getMachineXSell = (type, cb) => Pods.query({where: {type}})
  .orderBy('size')
  .fetch()
  .then(xsells => cb(getSmallestSize(xsells)));

// MACHINES
exports.getAllMachines = cb => Machines.fetch().then(cb);

exports.getMachineBySku = (sku, cb) => Machines.query({where: {sku}})
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

exports.getMachineByType = (type, cb) => Machines.query({where: {type}})
  .fetch()
  .then(cb);

exports.getMachineBySize = (size, cb) => Machines.query({where: {size}})
  .fetch()
  .then(cb);

// PODS
exports.getAllPods = cb => Pods.fetch().then(cb);

exports.getPodBySku = (sku, cb) => Pods.query({where: {sku}})
  .fetchOne()
  .then(pod => {
    if (!pod) {
      cb('that query was not found');
    }
    cb(pod);
  });

exports.getPodsByType = (type, cb) => Pods.query({where: {type}})
  .fetch()
  .then(cb);

exports.getPodsBySize = (size, cb) => Pods.query({where: {size}})
  .fetch()
  .then(cb);

exports.getPodsByFlavor = (flavor, cb) => Pods.query({where: {flavor}})
  .fetch()
  .then(all => {
    const groups = _.groupBy(all.map(model => model.attributes), 'type');
    const ordered = _.map(groups, each => each.sort((a,b) => a.size < b.size ? -1 : 1));
    const smallest = _.reduce(ordered, (memo, group) => memo.concat(group[0]), []);
    cb(smallest);
  });
