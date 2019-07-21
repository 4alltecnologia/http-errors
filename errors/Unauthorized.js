const CustomError = require('../CustomError');

/** @typedef {'UNAUTHORIZED'} UnauthorizedErrorCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} UnauthorizedErrorMessage Error message */

/**
 * @typedef {import('../CustomError')} Unauthorized
 * @param {UnauthorizedErrorCode} code Internal server error code
 * @param {UnauthorizedErrorMessage} message Internal server error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class Unauthorized extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {UnauthorizedErrorMessage} message Error message
   * @param {import('../CustomError').ErrorDetails} details Error details
   * @returns {Unauthorized}
   */
  constructor(message, details = null) {
    super('UNAUTHORIZED', message, details);
  }
}

module.exports = Unauthorized;
