const RND = require('random-js').Random;
const CustomError = require('../CustomError');

const random = new RND();

describe('Custom Error tests', () => {
  it('Should test all properties of a Custom Error', () => {
    const message = random.string(20);
    const err = new CustomError(message);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(CustomError);
    expect(err.message).toBeDefined();
    expect(err.message).toBe(message);
    expect(err.code).toBeDefined();
    expect(err.code).toBe(message);
  });

  it('Should NOT create a custom error, doesnt use the "new" keyword', () => {
    try {
      const err = CustomError('message'); // eslint-disable-line
    } catch (cErr) {
      const errMsg = 'Class constructor CustomError cannot be invoked without \'new\'';
      expect(cErr).toBeDefined();
      expect(cErr).toBeInstanceOf(Error);
      expect(cErr.message).toBeDefined();
      expect(cErr.message).toBe(errMsg);
      expect(cErr.name).toBeDefined();
      expect(cErr.name).toBe('TypeError');
      expect(cErr.code).toBeUndefined();
    }
  });
});
