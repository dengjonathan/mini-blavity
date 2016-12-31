const server = require('./config/serverConfig');
const PORT = process.env.PORT || 8080;

server.listen(PORT);

console.log(`Mini Blavity Server is listening on ${PORT}`);
