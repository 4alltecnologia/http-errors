const CustomError = require('../CustomError');

/** @typedef {'NOT_IMPLEMENTED'} NotImplementedCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotImplementedMessage Error message */

/**
 * @typedef {import('../CustomError')} NotImplemented
 * @param {NotImplementedCode} code Internal server error code
 * @param {NotImplementedMessage} message Internal server error message
 * @param {import('../CustomError').ErrorDetails} details Error details
 */

class NotImplemented extends CustomError {
  /**
     * Creates an Internal Server Error
     * @param {NotImplementedMessage} message Error message
     * @param {import('../CustomError').ErrorDetails} details Error details
     * @returns {NotImplemented}
     */
  constructor(message, details = null) {
    super('NOT_IMPLEMENTED', message, details);
  }
}

module.exports = NotImplemented;
