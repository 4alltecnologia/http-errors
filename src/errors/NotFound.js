const CustomError = require('../CustomError');

/** @typedef {'NOT_FOUND'} NotFoundCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotFoundMessage Error message */

/**
 * @typedef {import('../CustomError')} NotFound
 * @param {NotFoundCode} code Internal server error code
 * @param {NotFoundMessage} message Internal server error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class NotFound extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {NotFoundMessage} message Error message
   * @param {import('../CustomError').ErrorDetails} details Error details
   * @returns {NotFound}
   */
  constructor(message, details = null) {
    super('NOT_FOUND', message, details);
  }
}

module.exports = NotFound;
