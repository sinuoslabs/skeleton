import { ModuleMetadata, Provider, Type } from '@nestjs/common';

/**
 * @interface PackageNameChannelModuleOptionsFactory
 * @property createPackageNameChannelOptions()
 */
export interface PackageNameChannelModuleOptionsFactory {
  createPackageNameChannelOptions():
    | Promise<PackageNameChannelModuleOptions>
    | PackageNameChannelModuleOptions;
}

/**
 * @interface PackageNameChannelModuleAsyncOptions
 * @extends {Pick<ModuleMetadata, 'imports'>}
 * @property useExisting
 * @property useClass
 * @property useFactory
 * @property inject
 * @property extraProviders
 */
export interface PackageNameChannelModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<PackageNameChannelModuleOptionsFactory>;
  useClass?: Type<PackageNameChannelModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<PackageNameChannelModuleOptions> | PackageNameChannelModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}

/**
 * HTTP client.
 * @interface WebhookHttpClient
 */
export interface WebhookHttpClient {
  maxRedirects?: number;
  timeout?: number;
}

/**
 * @interface PackageNameChannelConfig
 */
export interface PackageNameChannelConfig {
  name?: string;
}

/**
 * @interface PackageNameChannelModuleOptions
 * @property {string} twilioAccountSid
 * @property {string} twilioAuthToken
 * @property {string} endpoint
 */
export interface PackageNameChannelModuleOptions extends PackageNameChannelConfig {}
