import { Inject, Injectable } from '@nestjs/common';
import { PartnerInfo } from '../../domain/partner/partner.info';
import { PartnerCommand } from '../../domain/partner/partner.command';
import { PartnerService } from '../../domain/partner/partner.service';

@Injectable()
export class PartnerFacade {
  constructor(
    @Inject('PartnerService') private readonly partnerService: PartnerService,
  ) {}

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    return this.partnerService.retrievePartnerInfo(partnerId);
  }

  async registerPartner(command: PartnerCommand): Promise<PartnerInfo> {
    return this.partnerService.registerPartner(command);
  }
}
