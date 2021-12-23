import { DynamicModule, Global, Module, Provider, ValueProvider } from '@nestjs/common';
import {
  PackageNameChannelModuleAsyncOptions,
  PackageNameChannelModuleOptions,
  PackageNameChannelModuleOptionsFactory,
} from './interfaces';
import { PackageNameChannel } from './bootstrap';
import { PackageNameException } from './exceptions';
import { PACKAGE_NAME_CHANNEL_OPTIONS } from './constants';

@Global()
@Module({})
export class PackageNameModuleChannel {
  /**
   * Register module
   * @static
   * @param {PackageNameChannelModuleOptions} options
   * @return DynamicModule
   */
  static register(options: PackageNameChannelModuleOptions): DynamicModule {
    const channelProvider: ValueProvider = {
      provide: PACKAGE_NAME_CHANNEL_OPTIONS,
      useValue: options,
    };

    return {
      module: PackageNameModuleChannel,
      imports: [],
      providers: [PackageNameChannel, channelProvider],
      exports: [PackageNameChannel, channelProvider],
    };
  }

  /**
   * Register async
   * @static
   * @param {PackageNameChannelModuleAsyncOptions} options
   * @return DynamicModule
   */
  static registerAsync(options: PackageNameChannelModuleAsyncOptions): DynamicModule {
    const channelProvider: ValueProvider = {
      provide: PACKAGE_NAME_CHANNEL_OPTIONS,
      useValue: options,
    };

    return {
      module: PackageNameModuleChannel,
      imports: options.imports || [],
      providers: [PackageNameChannel, channelProvider, ...this.createAsyncProviders(options)],
      exports: [PackageNameChannel, channelProvider],
    };
  }

  /**
   * Create async providers
   * @private
   * @param {PackageNameChannelModuleAsyncOptions} options
   * @return Provider[]
   */
  private static createAsyncProviders(options: PackageNameChannelModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncConfigProvider(options)];
    } else if (!options.useClass) {
      return [
        {
          provide: PACKAGE_NAME_CHANNEL_OPTIONS,
          useValue: {},
          inject: options.inject || [],
        },
      ];
    }

    return [
      this.createAsyncConfigProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  /**
   * Create async config provider
   * @private
   * @param {PackageNameChannelModuleAsyncOptions} options
   * @return Provider<any>
   */
  private static createAsyncConfigProvider(
    options: PackageNameChannelModuleAsyncOptions,
  ): Provider<any> {
    if (options.useFactory) {
      return {
        provide: PACKAGE_NAME_CHANNEL_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    const inject = options.useClass || options.useExisting;

    if (!inject) {
      throw new PackageNameException(
        'Invalid configuration. Must provide useFactory, useClass or useExisting',
      );
    }

    return {
      provide: PACKAGE_NAME_CHANNEL_OPTIONS,
      async useFactory(
        optionsFactory: PackageNameChannelModuleOptionsFactory,
      ): Promise<PackageNameChannelModuleOptions> {
        return optionsFactory.createPackageNameChannelOptions();
      },
      inject: [inject],
    };
  }
}
