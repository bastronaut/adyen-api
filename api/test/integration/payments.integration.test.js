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
            })
    });
})

const matchesIdealResponse = (response) => {
    return response.hasOwnProperty('resultCode') &&
        response.resultCode === 'RedirectShopper' &&
        response.hasOwnProperty('redirect') &&
        response.redirect.hasOwnProperty('url');
}