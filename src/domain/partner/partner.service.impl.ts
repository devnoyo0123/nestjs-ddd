import { PartnerService } from './partner.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PartnerRepositoryImpl } from '../../infrastructure/partner/partner.repository.impl';
import { PartnerCommand } from './partner.command';
import { PartnerInfo } from './partner.info';
import { PartnerReader } from './partner.reader';

@Injectable()
export class PartnerServiceImpl implements PartnerService {
  constructor(
    @InjectRepository(PartnerRepositoryImpl)
    private partnerRepository: PartnerReader,
  ) {}
  registerPartner(command: PartnerCommand) {
    const initPartner = command.toEntity();
  }

  async retrievePartnerInfo(partnerId: number): Promise<PartnerInfo> {
    const partner = await this.partnerRepository.getPartnerBy(partnerId);
    return new PartnerInfo(partner);
  }
}
