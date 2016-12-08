const machines = require('../collections/machines');
const pods = require('../collections/pods');

// MACHINES
exports.getAllMachines = cb => {
  machines.fetch().then(all => cb(all));
};

exports.getMachineBySku = (sku, cb) => {
  machines.query({where: {sku}})
    .fetchOne()
    .then(machine => {
      // fetch cross-sells
      if (!machine) {
        cb('that query was not found');
      }
      cb(machine);
    });
};

exports.getMachineByType = (type, cb) => machines.query({where: {type}})
  .fetch()
  .then(cb);

exports.getMachineBySize = (size, cb) => machines.query({where: {size}})
  .fetch()
  .then(cb);

// PODS
exports.getAllPods = (cb) => {
  console.log(cb.toString());
  pods.fetch().then(cb);
};


