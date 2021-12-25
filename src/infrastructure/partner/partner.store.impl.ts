import { PartnerStore } from '../../domain/partner/partner.store';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PartnerRepositoryImpl } from './partner.repository.impl';
import { Partner } from '../../domain/partner/partner.entity';

@Injectable()
export class PartnerStoreImpl implements PartnerStore {
  constructor(
    @InjectRepository(PartnerRepositoryImpl)
    private partnerRepository: PartnerStore,
  ) {}

  store(partner: Partner) {
    return this.partnerRepository.store(partner);
  }
}
