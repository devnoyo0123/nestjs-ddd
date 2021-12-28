import { PartnerStore } from '../../domain/partner/partner.store';
import { Inject, Injectable } from '@nestjs/common';
import { Partner } from '../../domain/partner/partner.entity';
import { EntityManager } from 'typeorm';
import { PartnerRepository } from './partner.repository';

@Injectable()
export class PartnerStoreImpl implements PartnerStore {
  constructor(
    @Inject('PartnerRepository')
    private partnerRepository: PartnerRepository,
  ) {}

  async store(partner: Partner, entityManager: EntityManager) {
    return this.partnerRepository.store(partner, entityManager);
  }
}
