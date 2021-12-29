import { EntityManager } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';
import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './partner.repository';
import { PartnerCriteria } from '../../domain/partner/partner.criteria';

@Injectable()
export class PartnerRepositoryImpl implements PartnerRepository {
  async getPartnerBy(partnerId: number, entityManager: EntityManager): Promise<Partner> {
    return entityManager.findOne(Partner, partnerId);
  }

  async getPartner(criteria: PartnerCriteria, entityManager: EntityManager): Promise<Partner> {
    return entityManager
      .getRepository(Partner)
      .createQueryBuilder('partner')
      .where('partner.email = :email', { email: `${criteria.email}` })
      .getOne();
  }

  async store(partner: Partner, entityManager: EntityManager) {
    return entityManager.save(Partner, partner);
  }
}
