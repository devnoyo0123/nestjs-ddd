import { EntityManager } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';
import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './partner.repository';

@Injectable()
export class PartnerRepositoryImpl implements PartnerRepository {
  async getPartnerBy(
    partnerId: number,
    entityManager: EntityManager,
  ): Promise<Partner> {
    return entityManager.findOne(Partner, partnerId);
  }

  async store(partner: Partner, entityManager: EntityManager) {
    return entityManager.save(Partner, partner);
  }
}
