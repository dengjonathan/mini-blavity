const machines = require('../collections/machines');
const pods = require('../collections/pods');

exports.getAllMachines = (req, res) => machines.fetch()
  .then(data => res.send(data));

exports.getOneMachine = (req, res) => {
  machines.query({where: {sku: req.params.id}})
    .fetchOne()
    .then(machine => {
      // fetch cross-sells
      if (!machine) {
        return res.send('that query not found');
      }
      return res.send(machine);
    });
};

exports.getAllPods = (req, res) => pods.fetch()
  .then(data => res.send(data));

exports.getOnePod = (req, res) => {};

exports.getCrossSell = (req, res) => {};
