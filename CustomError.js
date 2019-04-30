/** @typedef {String} ErrorCode Error code */
/** @typedef {String} ErrorMessage Error message */

class CustomError extends Error {
  /**
   * Creates a custom error
   * @param {ErrorCode} code Error Code
   * @param {ErrorMessage} message Error Message
   */
  constructor(code, message = null) {
    super(message || code);
    this.code = code;
  }
}

module.exports = CustomError;
