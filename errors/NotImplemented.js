const CustomError = require('../CustomError');

/** @typedef {'NOT_IMPLEMENTED'} NotImplementedCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotImplementedMessage Error message */

/**
 * @typedef {import('../CustomError')} NotImplemented
 * @param {NotImplementedCode} code Internal server error code
 * @param {NotImplementedMessage} message Internal server error message
 */

class NotImplemented extends CustomError {
  /**
     * Creates an Internal Server Error
     * @param {NotImplementedMessage} message Error message
     * @returns {NotImplemented}
     */
  constructor(message) {
    super('NOT_IMPLEMENTED', message);
  }
}

module.exports = NotImplemented;
