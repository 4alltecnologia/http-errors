const R = require('ramda');
const { Random } = require('random-js');
const BadRequest = require('../BadRequest');

const rnd = new Random();

describe('Bad Request Error tests', () => {
  it('Should export a function of Bad Request Error', () => {
    expect(BadRequest).toBeDefined();
    expect(BadRequest).toBeInstanceOf(Function);
    expect(BadRequest.name).toBeDefined();
    expect(BadRequest.name).toBe('BadRequest');
  });

  it('Should create a Bad Request Error (no message)', () => {
    const err = new BadRequest();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'BAD_REQUEST',
      message: 'BAD_REQUEST',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Bad Request Error (with message)', () => {
    const msg = rnd.string(20);
    const err = new BadRequest(msg);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'BAD_REQUEST',
      message: msg,
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Bad Request Error (with added details)', () => {
    const msg = rnd.string(20);
    const err = new BadRequest(msg);
    err.addDetail(new BadRequest('added detail'));
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'BAD_REQUEST',
      message: msg,
      details: [(new BadRequest('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });

  it('Should create a Bad Request Error (with details)', () => {
    const msg = rnd.string(20);
    const err = new BadRequest(msg, [(new BadRequest('added detail')).toJSON()]);
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'BAD_REQUEST',
      message: msg,
      details: [(new BadRequest('added detail')).toJSON()],
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
