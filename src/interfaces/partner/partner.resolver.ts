import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PartnerFacade } from '../../application/partner/partner.facade';
import { PartnerMapper } from './partner.mapper';

@Resolver('Partner')
export class PartnerResolver {
  constructor(
    private partnerFacade: PartnerFacade,
    private partnerMapper: PartnerMapper,
  ) {}
  //
  // @Mutation('registerPartner')
  // async registerPartner(@Args() partnerInput: PartnerInput) {
  //   // const command = request.toCommand();
  //   // const partnerInfo = partnerFacade.registerPartner(command);
  //   // const response = new PartnerDto.RegisterResponse(partnerInfo);
  //   // return CommonResponse.success(response);
  // }

  @Query('retrievePartnerBy')
  async retrieve(@Args('partnerId') partnerId: number) {
    const partnerInfo = await this.partnerFacade.retrievePartnerInfo(partnerId);
    const response = this.partnerMapper.of(partnerInfo);
    return response;
  }
}
