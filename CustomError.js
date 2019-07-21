const R = require('ramda');

/** @typedef {String} ErrorCode Error code */
/** @typedef {String} ErrorMessage Error message */
/** @typedef {{ code: ErrorCode, message: ErrorMessage }} ErrorDetail */
/** @typedef {Array<ErrorDetail>} ErrorDetails Error Details */

/**
 * @typedef {Error} CustomError
 * @param {ErrorCode} code
 * @param {ErrorMessage} message
 */

class CustomError extends Error {
  /**
   * Creates a custom error
   * @param {ErrorCode} code Error Code
   * @param {ErrorMessage} message Error Message
   * @param {ErrorDetails} details Error Details
   */
  constructor(code, message = null, details = null) {
    super(message || code);
    this.code = code;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * @param {ErrorDetail} detail
   * @returns {CustomError}
   */
  addDetail(detail) {
    if (!this.details) {
      this.details = [];
    }

    let adder = detail;
    if (detail instanceof CustomError) {
      adder = detail.toJSON();
    }

    this.details.push(adder);
    return this;
  }

  /**
   * @returns {{ message: ErrorMessage, code: ErrorCode, details?: ErrorDetails }}
   */
  toJSON() {
    return R.reject(R.isNil, {
      message: this.message,
      code: this.code,
      details: this.details,
    });
  }
}

/** @exports CustomError */
module.exports = CustomError;
