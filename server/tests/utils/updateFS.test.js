const chai = require('chai');
const chaiFiles = require('chai-files');

const updateFS = require('../../utils/updateFS');

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
  const pathToFile = `${__dirname}/../../articles/${id}-${version}.html`;

  it('should save file to file system', (done) => {
    updateFS.updateArticle(id, version, htmlString)
      .then(reply => {
        expect(file(pathToFile)).to.exist;
        expect(file(pathToFile)).to.equal(htmlString);
        done();
      })
      .catch(e => {console.error(e)});
  });

  afterEach(() => {
    updateFS.deleteArticle(id, version);
  });
});
