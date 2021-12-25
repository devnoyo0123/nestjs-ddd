import { Injectable } from '@nestjs/common';
import { PartnerInfo } from '../../domain/partner/partner.info';
import { PartnerServiceImpl } from '../../domain/partner/partner.service.impl';

@Injectable()
export class PartnerFacade {
  constructor(private partnerService: PartnerServiceImpl) {}

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    return this.partnerService.retrievePartnerInfo(partnerId);
  }
}
