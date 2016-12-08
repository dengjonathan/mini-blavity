const chai = require('chai');
const {expect} = chai;

const query = require('../../app/utils/query');

describe('query', () => {

  it('should fetch all machines', done => {
    query.getAllMachines(all => {
      expect(all.length).to.equal(9);
      done();
    });
  });

  it('should fetch a single machine by SKU', done => {
    query.getMachineBySku('CM001', one => {
      expect(one.item.attributes.type).to.equal('base');
      done();
    });
  });

  it('should filter machines by type', done => {
    query.getMachineByType('deluxe', deluxes => {
      expect(new Set(deluxes.map(m => m.attributes.type))).to.eql(new Set(['deluxe']));
      done();
    });
  });

  it('should filter machines by size', done => {
    query.getMachineBySize('small', smalls => {
      expect(new Set(smalls.map(m => m.attributes.size))).to.eql(new Set(['size']));
      done();
    });
  });

  it('should fetch all pods', done => {
    query.getAllPods(all => {
      expect(all.length).to.equal(26);
      done();
    });
  });

  it('should fetch one pod by sku', done => {
    query.getPodBySku('CP001', one => {
      expect(one.attributes.flavor).to.equal('vanilla');
      done();
    });
  });

  it('should filter pods by type', done => {
    query.getPodsByType('large', deluxes => {
      expect(new Set(deluxes.map(m => m.attributes.type))).to.eql(new Set(['large']));
      done();
    });
  });

  it('should filter machines by size', done => {
    query.getPodsBySize(12, smalls => {
      expect(new Set(smalls.map(m => m.attributes.size))).to.eql(new Set([12]));
      done();
    });
  });

  it('should filter machines by flavor', done => {
    query.getPodsByFlavor('psl', smalls => {
      expect(new Set(smalls.map(m => m.flavor))).to.eql(new Set(['psl']));
      done();
    });
  });

});
