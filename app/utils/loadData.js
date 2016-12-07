<<<<<<< Updated upstream
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
||||||| merged common ancestors
=======
// const fs = require('fs');
// const path = require('path');
// const db = require('./config');

// const Machines = require('../collections/machines');
// const Pods = require('../collections/pods');

// const writeInitialDB = (machines, pods) => {
//   machines.forEach(machine => Machines.create(machine));
//   pods.forEach(pod => Pods.create(pod));
// };

// const loadInitial = () => {
//   fs.readFile(path.join(__dirname, '/initial_data.json'), 'utf8', (err, text) => {
//     if (err) {
//       throw err;
//     }
//     data = JSON.parse(text);
//     loadInitial(data.machines, data.pods);
//     console.log('data loaded', data);
//   });
// };
>>>>>>> Stashed changes
