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

  it('Should create a Unauthorized Error (no message)', () => {
    const err = new Unauthorized();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: 'UNAUTHORIZED',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unauthorized Error (with message)', () => {
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

  it('Should create a Unauthorized Error (with added details)', () => {
    const msg = rnd.string(20);
    const err = new Unauthorized(msg);
    err.addDetail(new Unauthorized('added detail'));
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: msg,
      details: [(new Unauthorized('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unauthorized Error (with details)', () => {
    const msg = rnd.string(20);
    const err = new Unauthorized(msg, [(new Unauthorized('added detail')).toJSON()]);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNAUTHORIZED',
      message: msg,
      details: [(new Unauthorized('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
