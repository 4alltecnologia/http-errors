const R = require('ramda');
const { Random } = require('random-js');
const Unauthorized = require('../Unauthorized');

const rnd = new Random();

describe('Unauthorized Error tests', () => {
  it('Should export a function of Unauthorized Error', () => {
    expect(Unauthorized).toBeDefined();
    expect(Unauthorized).toBeInstanceOf(Function);
    expect(Unauthorized.name).toBeDefined();
    expect(Unauthorized.name).toBe('Unauthorized');
  });

  it('Should create a Unauthorized Error (no massage)', () => {
    const err = new Unauthorized();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: 'UNAUTHORIZED',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unauthorized Error (with massage)', () => {
    const msg = rnd.string(20);
    const err = new Unauthorized(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
