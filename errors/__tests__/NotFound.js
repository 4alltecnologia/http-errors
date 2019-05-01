const R = require('ramda');
const { Random } = require('random-js');
const NotFound = require('../NotFound');

const rnd = new Random();

describe('Not Found Error tests', () => {
  it('Should export a function of Not Found Error', () => {
    expect(NotFound).toBeDefined();
    expect(NotFound).toBeInstanceOf(Function);
    expect(NotFound.name).toBeDefined();
    expect(NotFound.name).toBe('NotFound');
  });

  it('Should create a Not Found Error (no massage)', () => {
    const err = new NotFound();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_FOUND',
      message: 'NOT_FOUND',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Found Error (with massage)', () => {
    const msg = rnd.string(20);
    const err = new NotFound(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_FOUND',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
