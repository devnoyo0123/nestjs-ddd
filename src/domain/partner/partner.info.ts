import { Partner, PartnerStatus } from './partner.entity';

export class PartnerInfo {
  id: number;
  name: string;
  businessNo: string;
  email: string;
  status: PartnerStatus;

  constructor(partial: Partial<Partner>) {
    this.id = partial.id;
    this.name = partial.name;
    this.email = partial.email;
    this.status = partial.status;
    this.businessNo = partial.businessNo;
  }
}
