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

  it('Should create a Not Implemented Error (no message)', () => {
    const err = new NotImplemented();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_IMPLEMENTED',
      message: 'NOT_IMPLEMENTED',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Implemented Error (with message)', () => {
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

  it('Should create a Not Implemented Error (with added details)', () => {
    const msg = rnd.string(20);
    const err = new NotImplemented(msg);
    err.addDetail(new NotImplemented('added detail'));
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_IMPLEMENTED',
      message: msg,
      details: [(new NotImplemented('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Not Implemented Error (with details)', () => {
    const msg = rnd.string(20);
    const err = new NotImplemented(msg, [(new NotImplemented('added detail')).toJSON()]);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'NOT_IMPLEMENTED',
      message: msg,
      details: [(new NotImplemented('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
