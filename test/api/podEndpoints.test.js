const chai = require('chai');
const {expect} = chai;

const chaiHttp = require('chai-http');
const server = require('../../app/utils/server');

chai.use(chaiHttp);

describe('pod endpoints', () => {

  it('GET /pods', () => {
    chai.request(server)
      .get('/pods')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body.length).to.equal(9);
      });
  });

  it('GET /pods/:id', () => {
    const sku = 'CP001';
    chai.request(server)
      .get('/pods/' + sku)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(typeof res.body).to.equal('object');
        expect(res.body.attributes.sku).to.equal('CP001');
      });
  });

  it('GET /machines/type/:type', () => {
    const type = 'small';
    chai.request(server)
      .get('/pods/type/' + type)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].attributes.type).to.equal('small');
      });
  });

  it('GET /machines/size/:size', () => {
    const size = 84;
    chai.request(server)
      .get('/pods/size/' + size)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body.length).to.equal(2);
        expect(res.body[0].attributes.type).to.equal('espresso');
      });
  });
});
