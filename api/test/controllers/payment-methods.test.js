const request = require('supertest');
const app = require('../../src/app');
const constants = require('../../src/utils/constants')
const sampledata = require('../../src/utils/sampledata')

const paymentMethodsRoute = constants.routes.paymentMethods;
const PaymentMethodsService = require('../../src/services/payment-methods-service');
jest.mock('../../src/services/payment-methods-service'); // to mock the PaymentMethodsService we cant use reference to const, but need to point to file

const paymentsSampleData = sampledata.getPaymentMethods;

beforeEach(() => {
  PaymentMethodsService.mockClear();
});

/** Start tests */

describe('Test get payment methods 50 euros', () => {
  test('It should respond with the available payment methods', () => {

    PaymentMethodsService.prototype.getPaymentMethods.mockResolvedValue(paymentsSampleData);

    const endpoint = getPaymentMethodsEndpoint(50);

    return request(app).get(endpoint).then(response => {
      expect(response.statusCode).toBe(200)
      expect(hasPaymentMethods(response, "SEPA Bank Transfer")).toBeTruthy();
      expect(hasPaymentMethods(response, "iDEAL")).toBeTruthy();
      expect(hasPaymentMethods(response, "UnionPay")).toBeTruthy();
    })
  });
})




/**
 * Checks wether the response contains the given payment method
 * @param {*} response the paymentmethods data
 * @param {*} paymentMethod the payment method to test for, e.g. Credit Card or Ideal
 */
function containsPaymentMethod(response, paymentMethod) {

  if (response.hasOwnProperty('paymentMethods')) {
    for (let i = 0; i < response.paymentMethods.length; i++) {
      if (response.paymentMethods[i].name === paymentMethod) return true;
    }
  }
  return false;
}


const getPaymentMethodsEndpoint = (amount, currency, countryCode) => {
  const amountParam = constants.queryParameters.amount + "=";
  const currencyParam = constants.queryParameters.currency + "=";
  const countryCodeParam = constants.queryParameters.countryCode + "=";

  let endpoint = paymentMethodsRoute + "?" + amountParam + amount;

  if (currency !== undefined) {
    endpoint += "&" + currencyParam + currency;
  }

  if (countryCode !== undefined) {
    endpoint += "&" + countryCodeParam + countryCode;
  }

  return endpoint;
}
