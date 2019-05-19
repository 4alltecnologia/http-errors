const CustomError = require('../CustomError');

/** @typedef {'INTERNAL_SERVER_ERROR'} InternalServerErrorCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} InternalServerErrorMessage Error message */

/**
 * @typedef {import('../CustomError').CustomError} InternalServerError
 * @param {InternalServerErrorCode} code Internal server error code
 * @param {InternalServerErrorMessage} message Internal server error message
 * @extends import('../CustomError')
 */

class InternalServerError extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {InternalServerErrorMessage} message Error message
   * @returns {InternalServerError}
   */
  constructor(message) {
    super('INTERNAL_SERVER_ERROR', message);
  }
}

/** @exports InternalServerError */
module.exports = InternalServerError;
