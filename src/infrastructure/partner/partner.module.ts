import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerRepositoryImpl } from './partner.repository.impl';
import { PartnerStoreImpl } from './partner.store.impl';
import { PartnerReaderImpl } from './partner.reader.impl';

@Module({
  imports: [TypeOrmModule.forFeature([PartnerRepositoryImpl])],
  providers: [PartnerStoreImpl, PartnerReaderImpl],
})
export class PartnerModule {}
