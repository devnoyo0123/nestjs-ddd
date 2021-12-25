import { Partner, PartnerStatus } from './partner.entity';

export class PartnerCommand {
  partnerName: string;
  businessNo: string;
  email: string;
  status: PartnerStatus;

  constructor(partner: Partial<Partner>) {
    this.partnerName = partner.name;
    this.businessNo = partner.businessNo;
    this.email = partner.email;
    this.status = partner.status;
  }

  toEntity(): Omit<Partner, 'id' | 'updatedAt' | 'createdAt' | 'deletedAt'> {
    return {
      businessNo: this.businessNo,
      email: this.email,
      name: this.partnerName,
      status: this.status,
    };
  }
}
