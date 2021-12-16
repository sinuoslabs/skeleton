import { NestJsNotify } from '@sinuos/nestjs-notification';

/**
 * Webhook channel model
 * @interface IServiceNameChannel
 * @extends NestJsNotify
 */
export interface IServiceNameChannel extends NestJsNotify {
  /**
   * Get representation of the notification.
   * @property
   * @returns {any}
   */
  toServiceAction(): any;
}
