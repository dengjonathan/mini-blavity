const SocketIO = require('socket.io');
const server = require('./serverConfig').server;

const io = SocketIO(server);

io.on('connection', socket => {
  console.log('connected');
  socket.emit('articleUpdate', 'hello world');
});

// exports.broadcastUpdatedArticle = io