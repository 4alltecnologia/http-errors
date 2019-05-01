const CustomError = require('../CustomError');

/** @typedef {'NOT_FOUND'} NotFoundCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotFoundMessage Error message */

/**
 * @typedef NotFound
 * @param {NotFoundCode} code Internal server error code
 * @param {NotFoundMessage} message Internal server error message
 * @extends import('../CustomError')
 */

class NotFound extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {NotFoundMessage} message Error message
   * @returns {{ message: NotFoundMessage, code: NotFoundCode }}
   */
  constructor(message) {
    super('NOT_FOUND', message);
  }
}

module.exports = NotFound;