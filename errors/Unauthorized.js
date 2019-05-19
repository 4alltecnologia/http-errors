const CustomError = require('../CustomError');

/** @typedef {'UNAUTHORIZED'} UnauthorizedErrorCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} UnauthorizedErrorMessage Error message */

/**
 * @typedef {import('../CustomError')} Unauthorized
 * @param {UnauthorizedErrorCode} code Internal server error code
 * @param {UnauthorizedErrorMessage} message Internal server error message
 */

class Unauthorized extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {UnauthorizedErrorMessage} message Error message
   * @returns {Unauthorized}
   */
  constructor(message) {
    super('UNAUTHORIZED', message);
  }
}

module.exports = Unauthorized;
