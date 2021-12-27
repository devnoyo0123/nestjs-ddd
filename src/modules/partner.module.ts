import { Module } from '@nestjs/common';
import { PartnerResolver } from '../interfaces/partner/partner.resolver';
import { PartnerDtoMapper } from '../interfaces/partner/partner.dto.mapper';
import { PartnerFacade } from '../application/partner/partner.facade';
import { PartnerServiceImpl } from '../domain/partner/partner.service.impl';
import { PartnerReaderImpl } from '../infrastructure/partner/partner.reader.impl';
import { PartnerStoreImpl } from '../infrastructure/partner/partner.store.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerRepositoryImpl } from '../infrastructure/partner/partner.repository.impl';

const partnerServiceProvider = {
  provide: 'PartnerService',
  useClass: PartnerServiceImpl,
};

const partnerReaderProvider = {
  provide: 'PartnerReader',
  useClass: PartnerReaderImpl,
};

const partnerStoreProvider = {
  provide: 'PartnerStore',
  useClass: PartnerStoreImpl,
};

// const partnerRepositoryProvider = {
//   provide: 'PartnerStore',
//   useClass: PartnerRepositoryImpl,
// };

/**
 * DI 관련 모든 설정은 이곳에서 하는 것이 어떨까요...?
 */
@Module({
  imports: [TypeOrmModule.forFeature([PartnerRepositoryImpl])],
  providers: [
    PartnerResolver,
    PartnerDtoMapper,
    PartnerFacade,
    partnerServiceProvider,
    partnerReaderProvider,
    partnerStoreProvider,
  ],
})
export class PartnerModule {}
