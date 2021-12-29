import { PartnerService } from './partner.service';
import { Inject, Injectable } from '@nestjs/common';
import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerReader } from './partner.reader';
import { PartnerStore } from './partner.store';
import { Connection } from 'typeorm';
import { PartnerCriteria } from './partner.criteria';

@Injectable()
export class PartnerServiceImpl implements PartnerService {
  constructor(
    @Inject('PartnerReader')
    private partnerReader: PartnerReader,
    @Inject('PartnerStore')
    private partnerStore: PartnerStore,
    private connection: Connection,
  ) {}

  async registerPartner(command: PartnerCommand): Promise<PartnerInfo> {
    const initPartner = command.toEntity();
    return await this.connection.transaction(async manager => {
      const partner = await this.partnerStore.store(initPartner, manager);
      return new PartnerInfo(partner);
    });
  }

  async retrievePartnerInfoBy(partnerId: number): Promise<PartnerInfo> {
    return await this.connection.transaction(async manager => {
      const partner = await this.partnerReader.getPartnerBy(partnerId, manager);
      return partner ? new PartnerInfo(partner) : null;
    });
  }

  async retrievePartnerInfo(partnerCriteria: PartnerCriteria): Promise<PartnerInfo> {
    const criteria = partnerCriteria.toCriteria();
    return await this.connection.transaction(async manager => {
      const partner = await this.partnerReader.getPartner(criteria, manager);
      return partner ? new PartnerInfo(partner) : null;
    });
  }
}
