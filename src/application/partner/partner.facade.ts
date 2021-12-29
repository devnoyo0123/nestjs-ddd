import { Inject, Injectable } from '@nestjs/common';
import { PartnerInfo } from '../../domain/partner/partner.info';
import { PartnerCommand } from '../../domain/partner/partner.command';
import { PartnerService } from '../../domain/partner/partner.service';
import { PartnerCriteria } from '../../domain/partner/partner.criteria';

@Injectable()
export class PartnerFacade {
  constructor(@Inject('PartnerService') private readonly partnerService: PartnerService) {}

  async retrievePartnerInfoBy(partnerId: number): Promise<PartnerInfo> {
    return this.partnerService.retrievePartnerInfoBy(partnerId);
  }

  async retrievePartnerInfo(criteria: PartnerCriteria): Promise<PartnerInfo> {
    return this.partnerService.retrievePartnerInfo(criteria);
  }

  async registerPartner(command: PartnerCommand): Promise<PartnerInfo> {
    return this.partnerService.registerPartner(command);
  }
}
