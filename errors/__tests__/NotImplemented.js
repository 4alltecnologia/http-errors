const R = require('ramda');
const { Random } = require('random-js');
const NotImplemented = require('../NotImplemented');

const rnd = new Random();

describe('Not Implemented Error tests', () => {
  it('Should export a function of Not Implemented Error', () => {
    expect(NotImplemented).toBeDefined();
    expect(NotImplemented).toBeInstanceOf(Function);
    expect(NotImplemented.name).toBeDefined();
    expect(NotImplemented.name).toBe('NotImplemented');
  });

  it('Should create a Not Implemented Error (no massage)', () => {
    const err = new NotImplemented();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_IMPLEMENTED',
      message: 'NOT_IMPLEMENTED',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Implemented Error (with massage)', () => {
    const msg = rnd.string(20);
    const err = new NotImplemented(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_IMPLEMENTED',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
