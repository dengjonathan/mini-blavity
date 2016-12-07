const machines = require('../collections/machines');
const pods = require('../collections/pods');

exports.getAllMachines = (req, res) => {
  machines.fetch().then(data => res.send(data));
};

exports.getOneMachine = (req, res) => {};

exports.getAllPods = (req, res) => {};

exports.getOnePod = (req, res) => {};

exports.getCrossSell = (req, res) => {};