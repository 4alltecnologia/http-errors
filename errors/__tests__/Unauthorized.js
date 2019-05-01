const R = require('ramda');
const { Random } = require('random-js');
const Unauthorized = require('../Unauthorized');

const rnd = new Random();

describe('Not Implemented Error tests', () => {
  it('Should export a function of Not Implemented Error', () => {
    expect(Unauthorized).toBeDefined();
    expect(Unauthorized).toBeInstanceOf(Function);
    expect(Unauthorized.name).toBeDefined();
    expect(Unauthorized.name).toBe('UnauthorizedError');
  });

  it('Should create a Not Implemented Error (no massage)', () => {
    const err = new Unauthorized();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: 'UNAUTHORIZED',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Implemented Error (with massage)', () => {
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
