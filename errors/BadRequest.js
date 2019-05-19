const CustomError = require('../CustomError');

/** @typedef {'BAD_REQUEST'} BadRequestCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} BadRequestMessage Error message */

/**
 * @typedef BadRequest
 * @param {BadRequestCode} code Bad request code
 * @param {BadRequestMessage} message Bad request error message
 * @extends import('../CustomError')
 */

class BadRequest extends CustomError {
  /**
   * Creates a Bad Request Error
   * @param {import('../CustomError').ErrorMessage} message
   * @returns {{ code: BadRequestCode, message: import('../CustomError').ErrorMessage }}
   */
  constructor(message) {
    super('BAD_REQUEST', message);
  }
}

/** @exports BadRequest */
module.exports = BadRequest;
