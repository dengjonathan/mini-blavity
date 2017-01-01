const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

exports.getArticle = (id, version) =>
fs.readFileAsync(`${__dirname}/../articles/${id}-${version}.html`, 'utf8');

exports.updateArticle = (id, version, htmlString) => {
  return fs.writeFileAsync(`${__dirname}/../articles/${id}-${version}.html`, htmlString)
    .catch(e => console.error(e));
};

exports.deleteArticle = (id, version = 1) => {
  return fs.unlinkAsync(`${__dirname}/../articles/${id}-${version}.html`)
    .catch(e => console.error(e));
};

