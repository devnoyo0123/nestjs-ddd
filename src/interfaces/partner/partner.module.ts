import { Module } from '@nestjs/common';
import { PartnerResolver } from './partner.resolver';
import { PartnerMapper } from './partner.mapper';

@Module({
  providers: [PartnerResolver, PartnerMapper],
})
export class PartnerModule {}
