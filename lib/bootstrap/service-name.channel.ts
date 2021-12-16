import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { INestjsNotifyChannel } from '@sinuos/nestjs-notification';
import { IServiceNameChannel } from './service-name.interface';

@Injectable()
export class ServiceNameChannel implements INestjsNotifyChannel {
  /**
   * @constructor
   */
  constructor() {
    // Initialisation code here
  }

  /**
   * Send notify action
   * @public
   * @param {IServiceNameChannel} notification
   * @return Promise<AxiosResponse<any>>
   */
  public async send(
    notification: IServiceNameChannel,
  ): Promise<any> {
    const message = ServiceNameChannel.getData(notification);

    return Promise.resolve(undefined);
  }

  /**
   * Get the data for the notification.
   * @param notification
   */
  private static getData(notification: IServiceNameChannel) {
    if (typeof notification.toServiceAction === 'function') {
      return notification.toServiceAction();
    }

    throw new InternalServerErrorException(
      'Notification is missing toWebhook method.',
    );
  }
}
