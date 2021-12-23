import { Injectable } from '@nestjs/common';
import { INestjsNotificationChannel } from '@sinuos/nestjs-notification';
import { IPackageNameChannel } from '../interfaces';
import { PackageNameException } from '../exceptions';

@Injectable()
export class PackageNameChannel implements INestjsNotificationChannel {
  /**
   * @constructor
   */
  constructor() {
    // Initialisation code here
  }

  /**
   * Send notify action
   * @public
   * @param {IPackageNameChannel} notification
   * @return Promise<any>
   */
  public async send(notification: IPackageNameChannel): Promise<any> {
    // validate content.
    this.validator(notification);

    const message = PackageNameChannel.getData(notification);

    return Promise.resolve(undefined);
  }

  /**
   * Validator.
   * @method
   * @param {IPackageNameChannel} notification
   * @private
   */
  private validator(notification: IPackageNameChannel) {
    const message = PackageNameChannel.getData(notification);
    //
  }

  /**
   * Get data.
   * @param notification
   * @private
   */
  private static getData(notification: IPackageNameChannel) {
    return PackageNameChannel.getChannelData(notification);
  }

  /**
   * Get the data for the notification.
   * @param {IPackageNameChannel} notification
   */
  private static getChannelData(notification: IPackageNameChannel) {
    if (typeof notification.toPackageNameAction === 'function') {
      return notification.toPackageNameAction();
    }

    throw new PackageNameException('Notification is missing toWebhook method.');
  }
}
