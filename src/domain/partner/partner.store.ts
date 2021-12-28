import { EntityManager } from 'typeorm';
import { Partner } from './partner.entity';

export interface PartnerStore {
  store(initPartner, entityManager?: EntityManager): Promise<Partner>;
}
