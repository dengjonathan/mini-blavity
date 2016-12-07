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
        return res.json('that query not found');
      }
      return res.json(machine);
    });
};

exports.getAllPods = (req, res) => pods.fetch()
  .then(data => res.json(data));

exports.getOnePod = (req, res) => {
  pods.query({where: {sku: req.params.id}})
  .fetchOne()
  .then(pod => {
    // fetch cross-sells
    if (!pod) {
      return res.json('that query not found');
    }
    return res.json(pod);
  });
};

