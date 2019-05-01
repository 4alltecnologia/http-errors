const R = require('ramda');
const { Random } = require('random-js');
const InternalServerError = require('../InternalServerError');

const rnd = new Random();

describe('Internal Server Error tests', () => {
  it('Should export a function of Internal Server Error', () => {
    expect(InternalServerError).toBeDefined();
    expect(InternalServerError).toBeInstanceOf(Function);
    expect(InternalServerError.name).toBeDefined();
    expect(InternalServerError.name).toBe('InternalServerError');
  });

  it('Should create a Internal Server Error (no massage)', () => {
    const err = new InternalServerError();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'INTERNAL_SERVER_ERROR',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Internal Server Error (with massage)', () => {
    const msg = rnd.string(20);
    const err = new InternalServerError(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'INTERNAL_SERVER_ERROR',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
