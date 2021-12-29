import { Partner } from './partner.entity';
import { EntityManager } from 'typeorm';

export interface PartnerReader {
  getPartnerBy(partnerId: number, entityManager?: EntityManager): Promise<Partner>;

  getPartner(criteria, entityManager?: EntityManager): Promise<Partner>;
}
