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
      CustomError('message');
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

  it('Should create a custom error and create an object with code and message', () => {
    const message = random.string(20);
    const err = new CustomError(message);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(CustomError);
    expect(err.message).toBeDefined();
    expect(err.message).toBe(message);
    expect(err.code).toBeDefined();
    expect(err.code).toBe(message);

    const jsonErr = err.toJSON();
    expect(jsonErr).toBeDefined();
    expect(jsonErr).toBeInstanceOf(Object);
    expect(jsonErr.message).toBeDefined();
    expect(jsonErr.message).toBe(message);
    expect(jsonErr.code).toBeDefined();
    expect(jsonErr.code).toBe(message);
  });

  it('Should create a custom error without details', () => {
    const message = random.string(20);
    const err = new CustomError(message);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(CustomError);
    expect(err.message).toBeDefined();
    expect(err.message).toBe(message);
    expect(err.code).toBeDefined();
    expect(err.code).toBe(message);
    expect(err.details).toBeDefined();
    expect(err.details).toBeNull();

    const jsonErr = err.toJSON();
    expect(jsonErr).toBeDefined();
    expect(jsonErr).toBeInstanceOf(Object);
    expect(jsonErr.message).toBeDefined();
    expect(jsonErr.message).toBe(message);
    expect(jsonErr.code).toBeDefined();
    expect(jsonErr.code).toBe(message);
    expect(jsonErr.details).toBeUndefined();
  });

  it('Should create a custom error without details and add some', () => {
    const message = random.string(20);
    const err = new CustomError(message);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(CustomError);
    expect(err.message).toBeDefined();
    expect(err.message).toBe(message);
    expect(err.code).toBeDefined();
    expect(err.code).toBe(message);
    expect(err.details).toBeDefined();
    expect(err.details).toBeNull();

    const jsonErr = err.toJSON();
    expect(jsonErr).toBeDefined();
    expect(jsonErr).toBeInstanceOf(Object);
    expect(jsonErr.message).toBeDefined();
    expect(jsonErr.message).toBe(message);
    expect(jsonErr.code).toBeDefined();
    expect(jsonErr.code).toBe(message);
    expect(jsonErr.details).toBeUndefined();

    err
      .addDetail(new CustomError('Some erro nonsense'))
      .addDetail(new CustomError('Other Error'))
      .addDetail({ code: '123', message: 'raw json error' });

    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(CustomError);
    expect(err.message).toBeDefined();
    expect(err.message).toBe(message);
    expect(err.code).toBeDefined();
    expect(err.code).toBe(message);
    expect(err.details).toBeDefined();
    expect(err.details).toBeInstanceOf(Array);
    expect(err.details.length).toBeGreaterThanOrEqual(3);
  });
});
