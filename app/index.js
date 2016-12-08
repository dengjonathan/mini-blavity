const server = require('./utils/server');
const PORT = process.env.PORT || 8080;

// init db and create tables if don't exist
require('./utils/database');
require('./utils/createTables');

server.listen(PORT);

console.log(`Coffee Server is listening on ${PORT}`);
