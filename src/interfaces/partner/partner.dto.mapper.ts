import { Injectable } from '@nestjs/common';
import { PartnerInfo } from '../../domain/partner/partner.info';
import { Partner, PartnerInput, RetrievePartnerInput } from '../../graphql.schema';
import { PartnerCommand } from '../../domain/partner/partner.command';
import { PartnerCriteria } from '../../domain/partner/partner.criteria';

@Injectable()
export class PartnerDtoMapper {
  toRetrievePartnerResponse(partnerInfo: PartnerInfo): Partner {
    if (!partnerInfo) {
      return null;
    }
    return {
      id: partnerInfo.id,
      partnerName: partnerInfo.name,
      email: partnerInfo.email,
      businessNo: partnerInfo.businessNo,
      status: partnerInfo.status,
    };
  }

  toRegisterPartnerCommand(partnerInput: PartnerInput): PartnerCommand {
    return new PartnerCommand(partnerInput);
  }

  toRegisterPartnerResponse(partnerInfo: PartnerInfo): Partner {
    return {
      id: partnerInfo.id,
      partnerName: partnerInfo.name,
      email: partnerInfo.email,
      businessNo: partnerInfo.businessNo,
      status: partnerInfo.status,
    };
  }

  toRetrievePartnerCriteria(retrievePartnerInput: RetrievePartnerInput) {
    return new PartnerCriteria(retrievePartnerInput);
  }
}
