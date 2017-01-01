const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const cache = require('../utils/updateCache');
const fileSystem = require('../utils/updateFS');
const fibonacci = require('../utils/fibonacci');

module.exports = io => {
  // MIDDLEWARES
  router.use(bodyParser.text({
    type: 'text/html'
  }));
  router.use(express.static(path.join(__dirname, '../../client/build')));
  // calculate fibonacci to simulate data queries
  router.use((req, res, next) => {
    fibonacci(34);
    next();
  });

  // ROUTES
  router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/build/index.html')));

  // returns html text for get request
  router.route('/articles/:id')
    .get((req, res) => {
      cache.getLatestArticle(req.params.id)
        .then(article => res.send(article.html))
        .catch(err => res.send(`Article id: ${req.params.id} not found, error: ${err}`));
    })
    // on post request
    // 1. update cache
    // 2. emit latest version to all clients via sockets
    // 3. write new file to disk
    .post((req, res) => {
      const id = req.params.id;

      cache.getLatestArticle(id)
        .then(article => {
          const version = parseInt(article.version) + 1;

          cache.updateLatestArticle(id, version, req.body);
          res.send(`Article ${id} posted successfully- your update is version ${version}`);
          return Object.assign({}, article, {
            html: req.body,
            version,
            id
          });
        })
        .then(article => {
          io.sockets.emit('articleUpdate', article);
          return article;
        })
        .then(article => fileSystem.updateArticle(article.id, article.version, article.html))
        .catch(err => {
          res.send(`Post was unsuccessful, error ${err}`);
        });
    });

  return router;
};
