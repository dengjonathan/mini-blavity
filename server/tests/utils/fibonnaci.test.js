const fibonacci = require('../../utils/fibonnaci');
const expect = require('chai').expect;

describe('fibonacci', () => {
  it('should calculate fibonacci(1)', () => {
    expect(fibonacci(1)).to.equal(1);
  });

  it('should calculate fibonacci(36)', () => {
    expect(fibonacci(36)).to.equal(14930352);
  });
});
