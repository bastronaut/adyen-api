# adyen-api
Adyen api experimentation created by a Node noob. Do not use for production purposes


# Running the code
Starting with an API key and Merchant Account is mandatory to do any of the service calls to the adyen api. May not be required for running tests, though integration tests will fail.

The Api Key and Merchant Account name are read from environment variables. Two ways to set these:

1. Advised: Create an .env file in the root folder, and add your variables. Expects:
 ```
 ADYENAPIKEY=<yourapikey>
 ADYENMERCHANTACCOUNT=<merchantaccountname>
````

2. Set the environment variables on the command line:
```ADYENAPIKEY=<yourapikey> ADYENMERCHANTACCOUNT=<merchantaccountname> npm run start```

Ignoring the .env file, run with 
```NODE_ENV=production npm run start```

### Running for development purposes
Assuming you have an .env file, command below will run and reload on save:
```npm run dev```


### notes & links

https://jestjs.io/docs/en/mock-functions
http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
https://jestjs.io/docs/en/expect.html

Country codes: https://en.wikipedia.org/wiki/ISO_3166-1
Currency codes: https://docs.adyen.com/development-resources/currency-codes/

### Adyen api
Additional data specification: https://ca-test.adyen.com/ca/ca/config/accountapi.shtml


### Debugging in VSCode

To debug, setup a vs code configuration file.
1. Add the 'api' folder to workspace (if you pick another folder you will need to modify the below snippet)
2. create .vscode folder in root if not exists
3. Add a file launch.json
4. Add code:
```
{
    "version": "0.0.1",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Jest Tests",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest",
            "args": [
                "-i"
            ],
            "internalConsoleOptions": "openOnSessionStart",
        },
    ]
}
```
5. Click on debug button on the left. Ensure the debug profile is selected in the top dropdown


### Currency codes
for up to date check https://docs.adyen.com/development-resources/currency-codes/


# API controllers

### GET payment methods

/paymentMethods?a=amount&c=currency&cc=countryCode

### POST payments

/payments

#### ideal payment post data
```
{
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
```

#### credit card payment post data
TODO: ideally shopperReference is generated through some session header
```
{
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
```