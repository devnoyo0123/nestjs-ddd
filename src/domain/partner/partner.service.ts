import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';

export interface PartnerService {
  registerPartner(command: PartnerCommand);
  retrievePartnerInfo(partnerId: number): Promise<PartnerInfo>;
}
