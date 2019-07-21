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

  it('Should create a Not Found Error (no message)', () => {
    const err = new NotFound();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_FOUND',
      message: 'NOT_FOUND',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Found Error (with message)', () => {
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

  it('Should create a Not Found Error (with added details)', () => {
    const msg = rnd.string(20);
    const err = new NotFound(msg);
    err.addDetail(new NotFound('added detail'));
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_FOUND',
      message: msg,
      details: [(new NotFound('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Found Error (with details)', () => {
    const msg = rnd.string(20);
    const err = new NotFound(msg, [(new NotFound('added detail')).toJSON()]);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_FOUND',
      message: msg,
      details: [(new NotFound('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
