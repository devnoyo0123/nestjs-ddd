import { RetrievePartnerInput } from '../../graphql.schema';

export class PartnerCriteria {
  email: string;

  constructor(retrievePartnerInput: RetrievePartnerInput) {
    this.email = retrievePartnerInput.email;
  }

  toCriteria() {
    return {
      email: this.email,
    };
  }
}
