import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';

export interface PartnerService {
  registerPartner(command: PartnerCommand): Promise<PartnerInfo>;
  retrievePartnerInfo(partnerId: number): Promise<PartnerInfo>;
}
