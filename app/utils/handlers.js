const machines = require('../collections/machines');
const pods = require('../collections/pods');

exports.getAllMachines = (req, res) => {
  machines.fetch().then(data => res.send(data));
};

exports.getOneMachine = (req, res) => {
  console.log(req.params.id);
  machines.query({where: {sku: req.params.id}})
    .fetchOne()
    .then(machine => {
      console.log(machine);
      if (!machine) {
        return res.send('that query not found');
      }
      return res.send(machine);
    });
};

exports.getAllPods = (req, res) => {};

exports.getOnePod = (req, res) => {};

exports.getCrossSell = (req, res) => {};
