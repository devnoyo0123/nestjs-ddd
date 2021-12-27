import { PartnerService } from './partner.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PartnerRepositoryImpl } from '../../infrastructure/partner/partner.repository.impl';
import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerReader } from './partner.reader';
import { PartnerStore } from './partner.store';

@Injectable()
export class PartnerServiceImpl implements PartnerService {
  constructor(
    @InjectRepository(PartnerRepositoryImpl)
    private partnerReader: PartnerReader,
    @InjectRepository(PartnerRepositoryImpl)
    private partnerStore: PartnerStore,
  ) {}
  async registerPartner(command: PartnerCommand) {
    const initPartner = command.toEntity();
    const partner = await this.partnerStore.store(initPartner);
    return new PartnerInfo(partner);
  }

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    const partner = await this.partnerReader.getPartnerBy(partnerId);
    return new PartnerInfo(partner);
  }
}
