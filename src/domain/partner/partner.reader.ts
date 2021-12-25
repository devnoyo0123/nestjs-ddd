import { Partner } from './partner.entity';

export interface PartnerReader {
  getPartnerBy(partnerId: number): Partner;
}
