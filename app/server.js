const express = require('express');
const bodyParser = require('body-parser');

const handlers = require('./handlers');
const app = express();
const PORT = process.env.PORT || 8080;

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

app.listen(PORT);
console.log(`Coffee Server is listening on ${PORT}`);

