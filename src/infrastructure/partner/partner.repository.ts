import { EntityManager } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';
import { PartnerCriteria } from '../../domain/partner/partner.criteria';

export interface PartnerRepository {
  getPartnerBy(partnerId: number, entityManager: EntityManager): Promise<Partner>;
  getPartner(criteria: PartnerCriteria, entityManager: EntityManager): Promise<Partner>;
  store(partner: Partner, entityManager: EntityManager): Promise<Partner>;
}
