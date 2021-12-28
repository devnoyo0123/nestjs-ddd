import { PartnerService } from './partner.service';
import { Inject, Injectable } from '@nestjs/common';
import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerReader } from './partner.reader';
import { PartnerStore } from './partner.store';
import { Connection } from 'typeorm';

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
    return await this.connection.transaction(async (manager) => {
      const partner = await this.partnerStore.store(initPartner, manager);
      return new PartnerInfo(partner);
    });
  }

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    return await this.connection.transaction(async (manager) => {
      const partner = await this.partnerReader.getPartnerBy(partnerId, manager);
      return partner ? new PartnerInfo(partner) : null;
    });
  }
}
