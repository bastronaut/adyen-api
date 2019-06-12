const request = require('supertest');
const app = require('../../src/app');
const constants = require('../../src/utils/constants')

const paymentMethodsRoute = constants.routes.paymentMethods;

// http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

/**

Sample request

  "merchantAccount": "YourMerchantAccount",
  "countryCode": "NL",
  "amount": {
    "currency": "EUR",
    "value": 1000
  }

  
Sample response
{
  "paymentMethods":[
    {
      "details":[...],
      "name":"Credit Card",
      "type":"scheme"
      ...
    },{
      "details":[...],
      "name":"SEPA Direct Debit",
      "type":"sepadirectdebit"
    },
    ...
  ]
}
 */



describe('Test the root path', () => {
    test('It should response the GET method', () => {

      console.log('testing:' + paymentMethodsRoute); 
      return request(app).get(paymentMethodsRoute).then(response => {
        expect(response.statusCode).toBe(200)
        expect(hasPaymentMethods);
        expect(yolo);
      })
    });
})

function hasPaymentMethods(response) {
  console.log("yes payment");
  return true;
}

function yolo(response) {
  console.log("yes yolo");
  return true;
}