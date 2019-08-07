const errors = require('../index');

describe('Error Tests', () => {
  it('Should export an object', () => {
    expect(errors).toBeDefined();
    expect(errors).toBeInstanceOf(Object);
  });

  it('Should export more than one property', () => {
    expect(errors).toBeDefined();
    expect(errors).toBeInstanceOf(Object);
    const keys = Object.keys(errors);
    expect(keys).toBeDefined();
    expect(keys).toBeInstanceOf(Array);
    expect(keys.length).toBeGreaterThan(0);
  });
});
