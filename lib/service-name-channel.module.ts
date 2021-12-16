import { Global, Module } from '@nestjs/common';
import { NestjsNotifyModule } from '@sinuos/nestjs-notification';
import { ServiceNameChannelService } from './service-name-channel.service';
import { ServiceNameChannel } from './bootstrap';

@Global()
@Module({
  imports: [NestjsNotifyModule.register({})],
  providers: [ServiceNameChannelService, ServiceNameChannel],
  exports: [ServiceNameChannelService],
})
export class ServiceNameChannelModule {}
