import { EntityRepository, Repository } from 'typeorm';
import { Partner } from '../../domain/partner/partner.entity';

@EntityRepository(Partner)
export class PartnerRepositoryImpl extends Repository<Partner> {
  async getPartnerBy(partnerId: number) {
    return this.findOne(partnerId);
  }

  async store(partner: Partner) {
    return this.save(partner);
  }
}
