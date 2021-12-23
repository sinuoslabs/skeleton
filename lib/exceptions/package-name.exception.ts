/**
 * @class PackageNameException
 * @extends Error
 */
export class PackageNameException extends Error {
  /**
   * @constructor
   * @param message
   */
  constructor(message: string) {
    super(message);

    this.name = 'PackageNameException';
  }
}
