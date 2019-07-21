const R = require('ramda');
const { Random } = require('random-js');
const UnprocessableEntity = require('../UnprocessableEntity');

const rnd = new Random();

describe('Unprocessable Entity Error tests', () => {
  it('Should export a function of Unprocessable Entity Error', () => {
    expect(UnprocessableEntity).toBeDefined();
    expect(UnprocessableEntity).toBeInstanceOf(Function);
    expect(UnprocessableEntity.name).toBeDefined();
    expect(UnprocessableEntity.name).toBe('UnprocessableEntity');
  });

  it('Should create a Unprocessable Entity Error (no message)', () => {
    const err = new UnprocessableEntity();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNPROCESSABLE_ENTITY',
      message: 'UNPROCESSABLE_ENTITY',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unprocessable Entity Error (with message)', () => {
    const msg = rnd.string(20);
    const err = new UnprocessableEntity(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNPROCESSABLE_ENTITY',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unprocessable Entity Error (with added details)', () => {
    const msg = rnd.string(20);
    const err = new UnprocessableEntity(msg);
    err.addDetail(new UnprocessableEntity('added detail'));
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNPROCESSABLE_ENTITY',
      message: msg,
      details: [(new UnprocessableEntity('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Unprocessable Entity Error (with details)', () => {
    const msg = rnd.string(20);
    const err = new UnprocessableEntity(msg, [(new UnprocessableEntity('added detail')).toJSON()]);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'UNPROCESSABLE_ENTITY',
      message: msg,
      details: [(new UnprocessableEntity('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
