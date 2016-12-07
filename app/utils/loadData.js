const fs = require('fs');
const path = require('path');

const Machines = require('../collections/machines');
const Pods = require('../collections/pods');

const readJSON = cb => {
  fs.readFile(path.join(__dirname, '/initial_data.json'), 'utf8', (err, text) => {
    if (err) {
      throw err;
    }
    cb(JSON.parse(text));
  });
};

exports.loadMachines = () => readJSON(data => {
  data.machines.forEach(machine => Machines.create(machine));
});

exports.loadPods = () => readJSON(data => {
  data.pods.forEach(pod => Pods.create(pod));
});

