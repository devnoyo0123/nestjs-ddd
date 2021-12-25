import { Module } from '@nestjs/common';
import { PartnerModule } from './partner/partner.module';

@Module({
  imports: [PartnerModule],
  exports: [PartnerModule],
})
export class DomainModule {}
