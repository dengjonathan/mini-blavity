const query = require('./query');
const machines = require('../collections/machines');
const pods = require('../collections/pods');

// HANDLERS FOR MACHINES
exports.getAllMachines = (req, res) => query.getAllMachines(res.send.bind(res));

exports.getMachineBySku = (req, res) =>
  query.getMachineBySku(req.params.sku, res.send.bind(res));

exports.getMachineByType = (req, res) =>
  query.getMachineByType(req.params.type, res.send.bind(res));

exports.getMachineBySize = (req, res) =>
  query.getMachineBySize(req.params.size, res.send.bind(res));

// HANDLERS FOR PODS
exports.getAllPods = (req, res) => query.getAllPods(res.send.bind(res));

exports.getOnePod = (req, res) => {
  pods.query({where: {sku: req.params.sku}})
  .fetchOne()
  .then(pod => {
    // fetch cross-sells
    if (!pod) {
      return res.send('that query not found');
    }
    return res.send(pod);
  });
};

