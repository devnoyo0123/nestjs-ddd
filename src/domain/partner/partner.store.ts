import { Partner } from './partner.entity';

export interface PartnerStore {
  store(initPartner: Partner);
}
