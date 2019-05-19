const CustomError = require('../CustomError');

/** @typedef {'NOT_FOUND'} NotFoundCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotFoundMessage Error message */

/**
 * @typedef {import('../CustomError')} NotFound
 * @param {NotFoundCode} code Internal server error code
 * @param {NotFoundMessage} message Internal server error message
 */

class NotFound extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {NotFoundMessage} message Error message
   * @returns {NotFound}
   */
  constructor(message) {
    super('NOT_FOUND', message);
  }
}

module.exports = NotFound;
