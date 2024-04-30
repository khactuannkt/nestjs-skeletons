import { HttpModule } from '@nestjs/axios';
import type { Provider } from '@nestjs/common';
import { Global, Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiConfigService } from './services/api-config.service';
import { AwsS3Service } from './services/aws-s3.service';
import { GeneratorService } from './services/generator.service';
import { ValidatorService } from './services/validator.service';
const providers: Provider[] = [
  ApiConfigService,
  ValidatorService,
  // AwsS3Service,
  GeneratorService,
  Logger,
];

@Global()
@Module({
  providers,
  imports: [
    CqrsModule,
    HttpModule,
  ],
  exports: [...providers, CqrsModule, HttpModule],
})
export class SharedModule {}
