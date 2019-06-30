export class UnsecuredCardPayment {
    constructor(amountValue, currency, countryCode, number, holderName, expiryYear, expiryMonth, cvc) {
        this.amountValue = amountValue;
        this.currency = currency;
        this.countryCode = countryCode;
        this.number = number;
        this.holderName = holderName;
        this.expiryYear = expiryYear;
        this.expiryMonth = expiryMonth;
        this.cvc = cvc;
    }
}