import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { INestjsNotificationChannel } from '@sinuos/nestjs-notification';
import { IPackageNameChannel } from './package-name.interface';

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
   * @return Promise<AxiosResponse<any>>
   */
  public async send(
    notification: IPackageNameChannel,
  ): Promise<any> {
    const message = PackageNameChannel.getData(notification);

    return Promise.resolve(undefined);
  }

  /**
   * Get the data for the notification.
   * @param notification
   */
  private static getData(notification: IPackageNameChannel) {
    if (typeof notification.toServiceAction === 'function') {
      return notification.toServiceAction();
    }

    throw new InternalServerErrorException(
      'Notification is missing toWebhook method.',
    );
  }
}
