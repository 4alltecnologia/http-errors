import CustomError from '../CustomError';

export default class InternalServerError extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param message Error message
   * @param details Error details
   */
  constructor(message: string, details = null) {
    super('INTERNAL_SERVER_ERROR', message, details);
  }
}
