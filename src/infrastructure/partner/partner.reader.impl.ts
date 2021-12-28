import { Inject, Injectable } from '@nestjs/common';
import { PartnerReader } from '../../domain/partner/partner.reader';
import { EntityManager } from 'typeorm';
import { PartnerRepository } from './partner.repository';

@Injectable()
export class PartnerReaderImpl implements PartnerReader {
  constructor(
    @Inject('PartnerRepository')
    private partnerRepository: PartnerRepository,
  ) {}

  getPartnerBy(partnerId: number, entityManager: EntityManager) {
    return this.partnerRepository.getPartnerBy(partnerId, entityManager);
  }
}
