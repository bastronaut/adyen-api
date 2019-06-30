
export class IdealPayment {
    constructor(amountValue, currency, countryCode, issuer, reference) {
        this.amountValue = amountValue;
        this.currency = currency;
        this.countryCode = countryCode;
        this.issuer = issuer;
        this.reference = reference;
    }
}