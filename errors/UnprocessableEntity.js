const CustomError = require('../CustomError');

/** @typedef {'UNPROCESSABLE_ENTITY'} UnprocessableEntityCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} UnprocessableEntityMessage Error message */

/**
 * @typedef {import('../CustomError')} UnprocessableEntity
 * @param {UnprocessableEntityCode} code Internal server error code
 * @param {UnprocessableEntityMessage} message Internal server error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class UnprocessableEntity extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param {UnprocessableEntityMessage} message Error message
   * @param {import('../CustomError').ErrorDetails} details Error details
   * @returns {UnprocessableEntity}
   */
  constructor(message, details = null) {
    super('UNPROCESSABLE_ENTITY', message, details);
  }
}

module.exports = UnprocessableEntity;
