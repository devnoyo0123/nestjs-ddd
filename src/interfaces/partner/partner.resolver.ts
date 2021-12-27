import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PartnerFacade } from '../../application/partner/partner.facade';
import { PartnerMapper } from './partner.mapper';
import { PartnerInput } from '../../graphql.schema';
import { PartnerCommand } from '../../domain/partner/partner.command';

@Resolver('Partner')
export class PartnerResolver {
  constructor(
    private partnerFacade: PartnerFacade,
    private partnerMapper: PartnerMapper,
  ) {}

  @Mutation('registerPartner')
  async registerPartner(@Args('partnerInput') input: PartnerInput) {
    const command = new PartnerCommand(input);
    const partnerInfo = await this.partnerFacade.registerPartner(command);
    const response = this.partnerMapper.of(partnerInfo);
    return response;
  }

  @Query('retrievePartnerBy')
  async retrieve(@Args('partnerId') partnerId: number) {
    const partnerInfo = await this.partnerFacade.retrievePartnerInfo(partnerId);
    const response = this.partnerMapper.of(partnerInfo);
    return response;
  }
}
