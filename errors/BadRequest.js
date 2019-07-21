const CustomError = require('../CustomError');

/** @typedef {'BAD_REQUEST'} BadRequestCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} BadRequestMessage Error message */

/**
 * @typedef {import('../CustomError')} BadRequest
 * @param {BadRequestCode} code Bad request code
 * @param {BadRequestMessage} message Bad request error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class BadRequest extends CustomError {
  /**
   * Creates a Bad Request Error
   * @param {import('../CustomError').ErrorMessage} message
   * @param {import('../CustomError').ErrorDetails} details
   * @returns {BadRequest}
   */
  constructor(message, details = null) {
    super('BAD_REQUEST', message, details);
  }
}

module.exports = BadRequest;
