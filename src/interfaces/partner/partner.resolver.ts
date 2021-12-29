import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PartnerFacade } from '../../application/partner/partner.facade';
import { PartnerDtoMapper } from './partner.dto.mapper';
import { Partner, PartnerInput, RetrievePartnerInput } from '../../graphql.schema';

@Resolver('Partner')
export class PartnerResolver {
  constructor(private readonly partnerFacade: PartnerFacade, private readonly partnerDtoMapper: PartnerDtoMapper) {}

  @Mutation('registerPartner')
  async register(@Args('partnerInput') input: PartnerInput): Promise<Partner> {
    const command = this.partnerDtoMapper.toRegisterPartnerCommand(input);
    const partnerInfo = await this.partnerFacade.registerPartner(command);
    return this.partnerDtoMapper.toRegisterPartnerResponse(partnerInfo);
  }

  @Query('retrievePartnerBy')
  async retrievePartnerBy(@Args('partnerId') partnerId: number): Promise<Partner> {
    const partnerInfo = await this.partnerFacade.retrievePartnerInfoBy(partnerId);
    return this.partnerDtoMapper.toRetrievePartnerResponse(partnerInfo);
  }

  @Query('retrievePartner')
  async retrievePartner(@Args('retrievePartnerInput') input: RetrievePartnerInput): Promise<Partner> {
    const criteria = this.partnerDtoMapper.toRetrievePartnerCriteria(input);
    const partnerInfo = await this.partnerFacade.retrievePartnerInfo(criteria);
    return this.partnerDtoMapper.toRetrievePartnerResponse(partnerInfo);
  }
}
