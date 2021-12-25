import { Global, Module } from '@nestjs/common';
import { PartnerModule } from './partner/partner.module';

@Global()
@Module({
  imports: [PartnerModule],
  exports: [PartnerModule],
})
export class InfrastructureModule {}
