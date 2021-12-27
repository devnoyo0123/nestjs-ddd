
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class PartnerInput {
    partnerName?: Nullable<string>;
    businessNo?: Nullable<string>;
    email?: Nullable<string>;
}

export class Partner {
    id: number;
    partnerName?: Nullable<string>;
    email?: Nullable<string>;
    businessNo?: Nullable<string>;
    status?: Nullable<string>;
}

export abstract class IMutation {
    abstract registerPartner(partnerInput: PartnerInput): Nullable<Partner> | Promise<Nullable<Partner>>;
}

export abstract class IQuery {
    abstract retrievePartnerBy(partnerId: number): Nullable<Partner> | Promise<Nullable<Partner>>;
}

type Nullable<T> = T | null;
