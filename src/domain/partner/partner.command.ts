import { PartnerStatus } from './partner.entity';
import { PartnerInput } from '../../graphql.schema';

export class PartnerCommand {
  partnerName: string;
  businessNo: string;
  email: string;
  status: PartnerStatus;

  constructor(partnerInput: PartnerInput) {
    this.partnerName = partnerInput.partnerName;
    this.businessNo = partnerInput.businessNo;
    this.email = partnerInput.email;
    this.status = PartnerStatus.ENABLE;
  }

  toEntity() {
    return {
      businessNo: this.businessNo,
      email: this.email,
      name: this.partnerName,
      status: this.status,
    };
  }
}
