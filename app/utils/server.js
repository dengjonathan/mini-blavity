const app = require('express')();
const bodyParser = require('body-parser');
const handlers = require('./handlers');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('hello world!'));

// ENDPOINTS FOR MACHINES
app.get('/machines', handlers.getAllMachines);

app.get('/machines/:sku', handlers.getMachineBySku);

app.get('/machines/type/:type', handlers.getMachineByType);

app.get('/machines/size/:size', handlers.getMachineBySize);

// ENDPOINTS FOR PODS
app.get('/pods', handlers.getAllPods);

app.get('/pods/:sku', handlers.getPodBySku);

app.get('/pods/flavor/:flavor', handlers.getPodsByFlavor);

app.get('/pods/size/:size', handlers.getPodsBySize);

app.get('/pods/type/:type', handlers.getPodsByType);

app.get('/*', (req, res) => {
  res.sendStatus(404);
});

module.exports = app;


