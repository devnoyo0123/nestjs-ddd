import { PartnerService } from './partner.service';
import { Inject, Injectable } from '@nestjs/common';
import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerReader } from './partner.reader';
import { PartnerStore } from './partner.store';

@Injectable()
export class PartnerServiceImpl implements PartnerService {
  constructor(
    @Inject('PartnerReader')
    private partnerReader: PartnerReader,
    @Inject('PartnerStore')
    private partnerStore: PartnerStore,
  ) {}

  async registerPartner(command: PartnerCommand): Promise<PartnerInfo> {
    const initPartner = command.toEntity();
    const partner = await this.partnerStore.store(initPartner);
    return new PartnerInfo(partner);
  }

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    const partner = await this.partnerReader.getPartnerBy(partnerId);
    return new PartnerInfo(partner);
  }
}
