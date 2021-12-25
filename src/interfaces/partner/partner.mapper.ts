import { Injectable } from '@nestjs/common';
import { PartnerInfo } from '../../domain/partner/partner.info';

@Injectable()
export class PartnerMapper {
  of(partnerInfo: PartnerInfo) {
    return {
      id: partnerInfo.id,
      name: partnerInfo.name,
      email: partnerInfo.email,
      status: partnerInfo.status,
      businessNo: partnerInfo.businessNo,
    };
  }
}
