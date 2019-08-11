import CustomError from '../CustomError';

export default class UnprocessableEntity extends CustomError {
  /**
   * Creates an Internal Server Error
   * @param message Error message
   * @param  details Error details
   */
  constructor(message: string, details = null) {
    super('UNPROCESSABLE_ENTITY', message, details);
  }
}
