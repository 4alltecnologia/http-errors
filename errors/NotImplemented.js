const CustomError = require('../CustomError');

/** @typedef {'NOT_IMPLEMENTED'} NotImplementedCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} NotImplementedMessage Error message */

/**
 * @typedef NotImplemented
 * @param {NotImplementedCode} code Internal server error code
 * @param {NotImplementedMessage} message Internal server error message
 * @extends import('../CustomError')
 */

class NotImplemented extends CustomError {
  /**
     * Creates an Internal Server Error
     * @param {NotImplementedMessage} message Error message
     * @returns {{ message: NotImplementedMessage, code: NotImplementedCode }}
     */
  constructor(message) {
    super('NOT_IMPLEMENTED', message);
  }
}

/** @exports NotImplemented */
module.exports = NotImplemented;
