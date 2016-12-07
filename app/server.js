const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('hell world!'));

app.get('/products/machines', handlers.getAllMachines);

app.get('/products/machines/:id', handlers.getOneMachine);

app.get('/products/pods', handlers.getAllPods);

app.get('/products/pods/:id', handlers.getOnePod);

app.get('/cross/:sku', handlers.getCrossSell);

app.get('/*', (req, res) => {
  res.sendStatus(404);
});

module.exports = app;


