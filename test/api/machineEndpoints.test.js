const chai = require('chai');
const {expect} = chai;

const chaiHttp = require('chai-http');
const server = require('../app/utils/server');

chai.use(chaiHttp);

describe('coffee machine endpoints', () => {

  it('GET /machines', () => {
    chai.request(server)
      .get('/machines')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body.length).to.equal(9);
      });
  });

  it('GET /machines/:id', () => {
    const sku = 'CM001';
    chai.request(server)
      .get('/machines/' + sku)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(typeof res.body).to.equal('object');
        expect(res.body.attributes.sku).to.equal('CM001');
        expect(Array.isArray(res.body.xsells)).to.equal('CM001');
      });
  });

  it('GET /machines/type/:type', () => {
    const type = 'deluxe';
    chai.request(server)
      .get('/machines/type/' + type)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].attributes.type).to.equal('deluxe');
      });
  });

  it('GET /machines/size/:size', () => {
    const size = 'small';
    chai.request(server)
      .get('/machines/size/' + size)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].attributes.type).to.equal('small');
      });
  });
});