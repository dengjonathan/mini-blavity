const SocketIO = require('socket.io');
const server = require('./serverConfig').server;
const cache = require('../utils/updateCache');

const io = SocketIO(server);

io.on('connection', socket => {
  cache.getLatestArticle('plane-crash')
    .then(article => socket.emit('articleUpdate', article));
});

exports.broadcastUpdatedArticle = id => {
  cache.getLatestArticle(id)
    .then(article => io.sockets.emit('articleUpdate', article));
};
