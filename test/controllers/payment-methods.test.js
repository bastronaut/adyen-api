const request = require('supertest');
const app = require('../../src/app');
const constants = require('../../src/utils/constants')
const sampledata = require('../../src/utils/sampledata')

const paymentMethodsRoute = constants.routes.paymentMethods;
const PaymentMethodsService = require('../../src/services/payment-methods-service');
jest.mock('../../src/services/payment-methods-service'); // to mock the PaymentMethodsService we cant use reference to const, but need to point to file

const getPaymentsSampleData = sampledata.getPaymentMethods;

beforeEach(() => {
  PaymentMethodsService.mockClear();
});

/** Start tests */

describe('Test get payment methods 50 euros', () => {
  test('It should respond with the available payment methods', () => {

    PaymentMethodsService.prototype.getPaymentMethods.mockResolvedValue(getPaymentsSampleData);

    const endpoint = getPaymentMethodsEndpoint(50);

    return request(app).get(endpoint).then(response => {
      expect(response.statusCode).toBe(200)
      expect(hasPaymentMethods(response)).toBeTruthy();
    })
  });
})


describe('Test get payment methods 50 Turkish Lira', () => {
  test('It should respond with the available payment methods for Turkish Lira', () => {

    PaymentMethodsService.prototype.getPaymentMethods.mockResolvedValue(getPaymentsSampleData);

    const endpoint = getPaymentMethodsEndpoint(50, "TRY");

    return request(app).get(endpoint).then(response => {
      expect(response.statusCode).toBe(200)
      expect(hasPaymentMethods(response)).toBeTruthy();
    })
  });
})

describe('Test get payment methods 50 USD in Canada', () => {
  test('It should respond with the available payment methods for Dollars in Canada', () => {

    PaymentMethodsService.prototype.getPaymentMethods.mockResolvedValue(getPaymentsSampleData);

    // TODO verify countrycodes
    const endpoint = getPaymentMethodsEndpoint(50, "USD", "CAN");

    return request(app).get(endpoint).then(response => {
      expect(response.statusCode).toBe(200)
      expect(hasPaymentMethods(response)).toBeTruthy();
    })
  });
})




function hasPaymentMethods(response) {
  console.log("yes payment");
  return false;
}


const getPaymentMethodsEndpoint = (amount, currency, countryCode) => {
  const amountParam = constants.queryParameters.amount + "=";
  const currencyParam = constants.queryParameters.currency + "=";
  const countryCodeParam = constants.queryParameters.countryCode + "=";

  if (currency !== undefined && countryCode !== undefined) {
    return paymentMethodsRoute + "?" + amountParam + amount + "&" + currencyParam + currency + "&" + countryCodeParam + countryCode;
  }

  if (currency !== undefined && countryCode === undefined) {
    return paymentMethodsRoute + "?" + amountParam + amount + "&" + currencyParam + currency;
  }

  return paymentMethodsRoute + "?" + amountParam + amount;
}
