const chai = require('chai');
const chaiFiles = require('chai-files');

const updateArticle = require('../../utils/updateArticle');

chai.use(chaiFiles);
const expect = chai.expect;
const file = chaiFiles.file;
const dir = chaiFiles.dir;

describe('update article on file system', () => {

  const id = 'test-article';
  const htmlString = 
    `<h1>This is a test</h1>
    <p>for testing if fs reads/writes work</p>`;
  const version = 1;

  it('should create a new version of article', (done) => {
    const pathToFile = `${__dirname}/../../articles/${id}-${version}.html`;
    updateArticle.updateArticle(id, htmlString, version)
      .then(reply => {
        expect(file(pathToFile)).to.exist;
        expect(file(pathToFile)).to.equal(htmlString);
        done();
      })
      .catch(e => {console.error(e)});
  });
});