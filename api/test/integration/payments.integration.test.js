const request = require('supertest');
const app = require('../../src/app');
const constants = require('../../src/utils/constants')
const sampledata = require('../../src/utils/sampledata')

const paymentsRoute = constants.routes.payments;


/** Start tests */

describe('Test perform ideal payment', () => {
    test('It should respond with a redirect link', () => {

        const endpoint = paymentsRoute;
        const postData = {
            "amount": {
                "currency": "EUR",
                "value": 10
            },
            "reference": "12345",
            "paymentMethod": {
                "type": "ideal",
                "issuer": "1121"
            },
        };

        return request(app).post(endpoint)
            .send(postData)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(matchesIdealResponse(response)).toBe(true);
                expect(response.resultCode).toMatch('RedirectShopper');
            })
    });
})



describe('Test make payment and tokenize card details', () => {
    test('It should respond with a shopper reference for recurring payments', () => {

        const endpoint = paymentsRoute;
        const postData = {
            "amount": {
                "currency": "EUR",
                "value": 20
            },
            "country": "NL",
            "reference": "12345",
            "paymentMethod": {
                "type": "scheme",
                "number": "4111111111111111",
                "expiryMonth": "08",
                "expiryYear": "2018",
                "holderName": "John Smith",
                "cvc": "737",
                "storeDetails": true
            },
            "shopperReference": "yourShopperId_12345",
        }

        return request(app).post(endpoint)
            .send(postData)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(matchesTokenizedDetailsResponse(response)).toBe(true)
                expect(response.additionalData['recurring.yourShopperId_12345']).toMatch('yourShopperId_12345')
                expect(response.resultCode).toMatch('Authorised')

            })
    });
})



describe('Test make payment and tokenize card details using Secured Fields', () => {
    test('It should respond with a shopper reference for recurring payments', () => {

        const endpoint = paymentsRoute;
        const postData = {
            "amount": {
                "currency": "EUR",
                "value": 20
            },
            "country": "NL",
            "reference": "12345",
            "paymentMethod": {
                "type": "scheme",
                "encryptedCardNumber": "adyenjs_0_1_18$MT6ppy0FAMVMLH...",
                "encryptedExpiryMonth": "adyenjs_0_1_18$MT6ppy0FAMVMLH...",
                "encryptedExpiryYear": "adyenjs_0_1_18$MT6ppy0FAMVMLH...",
                "encryptedSecurityCode": "adyenjs_0_1_18$MT6ppy0FAMVMLH...",
                "storeDetails": true
            },
            "shopperReference": "yourShopperId_123456",
        }

        return request(app).post(endpoint)
            .send(postData)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(matchesTokenizedDetailsResponse(response)).toBe(true)
                expect(response.additionalData['recurring.yourShopperId_12345']).toMatch('yourShopperId_123456')
                expect(response.resultCode).toMatch('Authorised')
            })
    });
})


const matchesIdealResponse = (response) => {
    return response.hasOwnProperty('resultCode') &&
        response.hasOwnProperty('redirect') &&
        response.redirect.hasOwnProperty('url');
}

const matchesTokenizedDetailsResponse = (response) => {
    return response.hasOwnProperty('additionalData') &&
        response.additionalData.hasOwnProperty('recurring.recurringDetailReference') &&
        response.additionalData.hasOwnProperty('recurringProcessingModel') &&
        response.additionalData.hasOwnProperty('recurring.shopperReference');
}