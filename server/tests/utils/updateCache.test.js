const chai = require('chai');

const updateCache = require('../../utils/updateCache');
const expect = chai.expect;

describe('update article on file system', () => {

  const id = 'test-article';
  const htmlString_v1 =
  `<h1>This is a test</h1>
    <p>for testing if cache reads/writes work</p>`;
  const htmlString_v2 =
    `<h1>This is a test version 2</h1>
    <p>for if the cache can update</p>`;

  it('should cache first version of an article', done => {
    updateCache.updateLatestArticle(id, 1, htmlString_v1)
      .then(_ => updateCache.getLatestArticle(id))
      .then(article => {
        expect(article.version).to.equal('1');
        expect(article.html).to.equal(htmlString_v1);
        done();
      })
      .catch(e => console.error(e));
  });

  it('should update cache to latest version', done => {
    updateCache.updateLatestArticle(id, 2, htmlString_v2)
      .then(_ => updateCache.getLatestArticle(id))
      .then(article => {
        expect(article.version).to.equal('2');
        expect(article.html).to.equal(htmlString_v2);
        done();
      })
      .catch(e => console.error(e));
  });

  afterEach(() => updateCache.deleteArticle(id));
});
