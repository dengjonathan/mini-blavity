const query = require('./query');

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

exports.getPodBySku = (req, res) =>
  query.getPodBySku(req.params.sku, res.send.bind(res));

exports.getPodsByType = (req, res) =>
  query.getPodsByType(req.params.type, res.send.bind(res));

exports.getPodsBySize = (req, res) =>
  query.getPodsBySize(req.params.size, res.send.bind(res));

exports.getPodsByFlavor = (req, res) =>
  query.getPodsByFlavor(req.params.flavor, res.send.bind(res));

