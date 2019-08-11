import CustomError from '../CustomError';

export default class NotImplemented extends CustomError {
  /**
     * Creates an Internal Server Error
     * @param message Error message
     * @param details Error details
     */
  constructor(message: string, details = null) {
    super('NOT_IMPLEMENTED', message, details);
  }
}
