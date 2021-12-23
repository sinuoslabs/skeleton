import { NestJsNotification } from '@sinuos/nestjs-notification';

/**
 * PackageName channel model
 * @interface IPackageNameChannel
 * @extends NestJsNotification
 */
export interface IPackageNameChannel extends NestJsNotification {
  /**
   * Get the Http representation of the notification.
   * @property
   * @returns {any} http payload data
   */
  toPackageNameAction?(): any;
}
