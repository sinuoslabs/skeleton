import { Injectable } from '@nestjs/common';
import { NestJsNotification, NestjsNotificationService } from '@sinuos/nestjs-notification';

@Injectable()
export class PackageNameChannelService {
  /**
   * @constructor
   * @param notifications
   */
  constructor(private readonly notifications: NestjsNotificationService) {}

  /**
   * Notify
   * @param notification
   */
  async notify(notification: NestJsNotification): Promise<any> {
    return this.notifications.send(notification);
  }
}
