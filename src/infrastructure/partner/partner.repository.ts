import { EntityManager } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';

export interface PartnerRepository {
  getPartnerBy(
    partnerId: number,
    entityManager: EntityManager,
  ): Promise<Partner>;
  store(partner: Partner, entityManager: EntityManager): Promise<Partner>;
}
