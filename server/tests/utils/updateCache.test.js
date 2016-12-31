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

  it('should cache first version of an article', (done) => {
    updateCache.updateLatestArticle(id, 1, htmlString_v1)
      .then(result => {
        console.log('result', result);
        return updateCache.getLatestArticle(id);
      })
      .then(article => {
        expect(article.version).to.equal('1');
        expect(article.html).to.equal(htmlString_v1);
        done();
      })
      .catch(e => {
        console.error(e)
      });
  });

  afterEach(() => {
    updateCache.deleteArticle(id);
  });
});
