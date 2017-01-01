const updateCache = require('./updateCache').updateLatestArticle;
const getArticle = require('./updateFS').getArticle;

const ARTICLE_ID = 'plane-crash';
const VERSION = 1;

// cache version 1 of article and emit to all clients
module.exports = io => getArticle(ARTICLE_ID, VERSION)
    .then(article => {
      updateCache(ARTICLE_ID, VERSION, article);
      return article;
    })
    .then(article => io.sockets.emit(article.html));
