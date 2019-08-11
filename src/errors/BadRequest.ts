import CustomError from '../CustomError';

export default class BadRequest extends CustomError {
  /**
   * Creates a Bad Request Error
   * @param message - Bad request error message
   * @param details
   */
  constructor(message: string, details = null) {
    super('BAD_REQUEST', message, details);
  }
}
