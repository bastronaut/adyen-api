export class UnsecuredCardPayment {
    constructor(amountValue, currency, countryCode, number, holderName, expiryYear, expiryMonth, cvc, reference, threeDS1 = false) {
        this.amountValue = amountValue;
        this.currency = currency;
        this.countryCode = countryCode;
        this.number = number;
        this.holderName = holderName;
        this.expiryYear = expiryYear;
        this.expiryMonth = expiryMonth;
        this.cvc = cvc;
        this.reference = reference;
        this.threeDS1 = threeDS1;
    }
}