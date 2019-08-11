import reject from 'ramda/src/reject';
import isNil from 'ramda/src/isNil';

interface DetailError {
  code: string;
  message: string;
}

export default abstract class CustomError extends Error {
  /** Error code */
  code: string;
  /** Error details */
  details: Array<DetailError> | null;

  /**
   * Creates a custom Error
   * @param code Error code
   * @param message Error message
   * @param details Erros details
   */
  constructor(
    code: string,
    message: string | null = null,
    details: Array<DetailError> | null = null,
  ) {
    super(message || code);
    this.code = code;
    this.details = details;
  }

  /**
   * Add a detail to the error
   * @param detail Detail to be added
   */
  addDetail(detail: DetailError): CustomError {
    if (!this.details) {
      this.details = [];
    }

    this.details.push(detail);
    return this;
  }

  /**
   * Gets a JSON representation of the error
   */
  get toJSON() {
    return reject(isNil, {
      message: this.message,
      code: this.code,
      details: this.details,
    });
  }
}
