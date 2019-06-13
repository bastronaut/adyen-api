const request = require('supertest');
const app = require('../../src/app');
const constants = require('../../src/utils/constants')
const sampledata = require('../../src/utils/sampledata')

const paymentMethodsRoute = constants.routes.paymentMethods;

/** Start tests */

describe('Test get payment methods 50 euros', () => {
    test('It should respond with the available payment methods', () => {

        const endpoint = getPaymentMethodsEndpoint(50);

        return request(app).get(endpoint).then(response => {
            expect(response.statusCode).toBe(200);
            expect(hasPaymentMethods(response)).toBe(true);
        })
    });
})

describe('Test get payment methods 50 euros in NL', () => {
    test('It should respond with the available payment methods', () => {

        const endpoint = getPaymentMethodsEndpoint(50, "EUR", "NL");

        return request(app).get(endpoint).then(response => {
            expect(response.statusCode).toBe(200);
            expect(hasPaymentMethods(response)).toBe(true);
            expect(containsPaymentMethod(response, "scheme")).toBe(true);
            expect(containsPaymentMethod(response, "ideal")).toBe(true);
            expect(containsPaymentMethod(response, "wechatpayWeb")).toBe(false);
        })
    });
})

describe('Test get payment methods 100 CNY in China', () => {
    test('It should respond with the available payment methods in China for Renmibi', () => {

        const endpoint = getPaymentMethodsEndpoint(1000, "CNY", "CN");

        return request(app).get(endpoint).then(response => {
            expect(response.statusCode).toBe(200);
            expect(hasPaymentMethods(response)).toBe(true);
            expect(containsPaymentMethod(response, "ideal")).toBe(false);
            expect(containsPaymentMethod(response, "wechatpayWeb")).toBe(true);
        })
    });
})



function hasPaymentMethods(response) {
    return response.hasOwnProperty('paymentMethods') && response.paymentMethods.length > 0;
}

/**
 * Checks wether the response contains the given payment method
 * @param {*} response the paymentmethods data
 * @param {*} paymentMethod the payment method to test for, e.g. Credit Card or Ideal
 */
function containsPaymentMethod(response, paymentMethod) {

    if (response.hasOwnProperty('paymentMethods')) {
        for (let i = 0; i < response.paymentMethods.length; i++) {
            if (response.paymentMethods[i].type === paymentMethod) return true;
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
