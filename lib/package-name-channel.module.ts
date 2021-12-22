import { Global, Module } from '@nestjs/common';
import { NestjsNotificationModule } from '@sinuos/nestjs-notification';
import { PackageNameChannelService } from './package-name-channel.service';
import { PackageNameChannel } from './bootstrap';

@Global()
@Module({
  imports: [NestjsNotificationModule.register({})],
  providers: [PackageNameChannelService, PackageNameChannel],
  exports: [PackageNameChannelService],
})
export class PackageNameChannelModule {}
