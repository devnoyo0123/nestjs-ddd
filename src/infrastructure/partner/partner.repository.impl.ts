import { EntityRepository, Repository } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';

@EntityRepository(Partner)
export class PartnerRepositoryImpl extends Repository<Partner> {
  getPartnerBy(partnerId: number) {
    return this.findOne(partnerId);
  }

  store(partner: Partner) {
    return this.store(partner);
  }
}
