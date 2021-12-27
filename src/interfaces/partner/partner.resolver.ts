import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PartnerFacade } from '../../application/partner/partner.facade';
import { PartnerDtoMapper } from './partner.dto.mapper';
import { Partner, PartnerInput } from '../../graphql.schema';

@Resolver('Partner')
export class PartnerResolver {
  constructor(
    private readonly partnerFacade: PartnerFacade,
    private readonly partnerDtoMapper: PartnerDtoMapper,
  ) {}

  @Mutation('registerPartner')
  async register(@Args('partnerInput') input: PartnerInput): Promise<Partner> {
    const command = this.partnerDtoMapper.toRegisterPartnerCommand(input);
    const partnerInfo = await this.partnerFacade.registerPartner(command);
    return this.partnerDtoMapper.toRegisterPartnerResponse(partnerInfo);
  }

  @Query('retrievePartnerBy')
  async retrieve(@Args('partnerId') partnerId: number): Promise<Partner> {
    const partnerInfo = await this.partnerFacade.retrievePartnerInfo(partnerId);
    return this.partnerDtoMapper.toRetrievePartnerResponse(partnerInfo);
  }
}
