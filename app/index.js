const server = require('./server');
const db = require('./utils/config');
const PORT = process.env.PORT || 8080;

server.listen(PORT);

console.log(`Coffee Server is listening on ${PORT}`);
