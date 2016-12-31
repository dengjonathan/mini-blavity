const server = require('./config/serverConfig').server;
const PORT = process.env.PORT || 8080;

require('./config/socketConfig');

server.listen(PORT);
console.log(`Mini Blavity Server is listening on ${PORT}`);
