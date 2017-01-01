const serverInstance = require('./config/serverConfig');
const PORT = process.env.PORT || 8080;

require('./config/socketConfig');
require('./utils/initialLoad')(serverInstance.io);

serverInstance.server.listen(PORT);
console.log(`Mini Blavity Server is listening on ${PORT}`);
