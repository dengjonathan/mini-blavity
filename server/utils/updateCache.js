const client = require('../config/redisConfig');

exports.updateLatestArticle = (id, version, htmlString) =>
  client.hmsetAsync(id, {
    html: htmlString,
    version
  });

exports.getLatestArticle = id => client.hgetallAsync(id);

exports.deleteArticle = id => client.del(id);
