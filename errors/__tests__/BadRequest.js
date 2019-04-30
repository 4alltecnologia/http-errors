const R = require('ramda');
const BadRequest = require('../BadRequest');

describe('Bad Request Error tests', () => {
  it('Should export a function of Bad Request Error', () => {
    expect(BadRequest).toBeDefined();
    expect(BadRequest).toBeInstanceOf(Function);
    expect(BadRequest.name).toBeDefined();
    expect(BadRequest.name).toBe('BadRequest');
  });

  it('Should create a Bad Request Error (no massage)', () => {
    const err = new BadRequest();
    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    const schema = {
      code: 'BAD_REQUEST',
      message: 'BAD_REQUEST',
    };
    expect(R.whereEq(schema, err)).toBe(true);
  });
});
