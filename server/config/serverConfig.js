const path = require('path');
const app = require('express')();
const bodyParser = require('body-parser');
//const handlers = require('./handlers');

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../articles/plane-crash-1.html')));

// ENDPOINTS FOR MACHINES
app.post('/articles/:id', handlers.updateArtice);

module.exports = app;
