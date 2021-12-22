import { NestJsNotification } from '@sinuos/nestjs-notification';

/**
 * Webhook channel model
 * @interface IPackageNameChannel
 * @extends NestJsNotification
 */
export interface IPackageNameChannel extends NestJsNotification {
  /**
   * Get representation of the notification.
   * @property
   * @returns {any}
   */
  toPackageAction(): any;
}
