import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PartnerRepositoryImpl } from './partner.repository.impl';
import { PartnerReader } from '../../domain/partner/partner.reader';

@Injectable()
export class PartnerReaderImpl implements PartnerReader {
  constructor(
    @InjectRepository(PartnerRepositoryImpl)
    private partnerRepository: PartnerReader,
  ) {}

  getPartnerBy(partnerId: number) {
    return this.partnerRepository.getPartnerBy(partnerId);
  }
}
