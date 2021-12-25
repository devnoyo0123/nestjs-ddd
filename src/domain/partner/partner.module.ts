import { Global, Module } from '@nestjs/common';
import { PartnerServiceImpl } from './partner.service.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerRepositoryImpl } from '../../infrastructure/partner/partner.repository.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([PartnerRepositoryImpl])],
  providers: [PartnerServiceImpl],
  exports: [PartnerServiceImpl],
})
export class PartnerModule {}
