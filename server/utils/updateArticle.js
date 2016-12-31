const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

exports.updateArticle = (id, htmlString, version) => {
  return fs.writeFileAsync(`${__dirname}/../articles/${id}-${version}.html`, htmlString);
  //  .catch(e => console.error(e));
};

exports.deleteArticle = (id, version = 1) => {
  return fs.unlinkAsync(`../articles/${id}-${version}.html`)
    .catch(e => console.error(e));
};