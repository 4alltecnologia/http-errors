const CustomError = require('../CustomError');

/** @typedef {'UNAUTHORIZED'} UnauthorizaedErrorCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} UnauthorizaedErrorMessage Error message */

/**
 * @typedef UnauthorizaedError
 * @param {UnauthorizaedErrorCode} code Internal server error code
 * @param {UnauthorizaedErrorMessage} message Internal server error message
 * @extends import('../CustomError')
 */

class UnauthorizedError extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {UnauthorizedErrorMessage} message Error message
   * @returns {{ message: UnauthorizedErrorMessage, code: UnauthorizedErrorCode }}
   */
  constructor(message) {
    super('UNAUTHORIZED', message);
  }
}

/** @exports UnauthorizaedError */
module.exports = UnauthorizedError;
