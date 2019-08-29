const CustomError = require('../CustomError');

/** @typedef {'INTERNAL_SERVER_ERROR'} InternalServerErrorCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} InternalServerErrorMessage Error message */

/**
 * @typedef {import('../CustomError')} InternalServerError
 * @param {InternalServerErrorCode} code Internal server error code
 * @param {InternalServerErrorMessage} message Internal server error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class InternalServerError extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {InternalServerErrorMessage} message Error message
   * @param {import('../CustomError').ErrorDetails} details Error details
   * @returns {InternalServerError}
   */
  constructor(message, details = null) {
    super('INTERNAL_SERVER_ERROR', message, details);
  }
}

module.exports = InternalServerError;
