import { Global, Module } from '@nestjs/common';
import { PartnerFacade } from './partner.facade';

@Global()
@Module({
  providers: [PartnerFacade],
  exports: [PartnerFacade],
})
export class PartnerModule {}
