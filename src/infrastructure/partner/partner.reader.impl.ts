import { Inject, Injectable } from '@nestjs/common';
import { PartnerReader } from '../../domain/partner/partner.reader';
import { EntityManager } from 'typeorm';
import { PartnerRepository } from './partner.repository';
import { PartnerCriteria } from '../../domain/partner/partner.criteria';

@Injectable()
export class PartnerReaderImpl implements PartnerReader {
  constructor(
    @Inject('PartnerRepository')
    private partnerRepository: PartnerRepository,
  ) {}

  getPartnerBy(partnerId: number, entityManager: EntityManager) {
    return this.partnerRepository.getPartnerBy(partnerId, entityManager);
  }

  getPartner(criteria: PartnerCriteria, entityManager: EntityManager) {
    return this.partnerRepository.getPartner(criteria, entityManager);
  }
}
