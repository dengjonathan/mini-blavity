const SocketIO = require('socket.io');
const cache = require('../utils/updateCache');

module.exports = server => {
  const io = SocketIO(server);

  io.on('connection', socket => {
    cache.getLatestArticle('plane-crash')
      .then(article => socket.emit('articleUpdate', article));
  });

  return io;
};
