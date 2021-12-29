import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerCriteria } from './partner.criteria';

export interface PartnerService {
  registerPartner(command: PartnerCommand): Promise<PartnerInfo>;
  retrievePartnerInfo(criteria: PartnerCriteria): Promise<PartnerInfo>;
  retrievePartnerInfoBy(partnerId: number): Promise<PartnerInfo>;
}
