/*
 for submitting raw card data merchant needs to be PCI l1 or l2 compliant. example call:
{
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "reference": "Your order number",
  "paymentMethod": {
    "type": "scheme",
    "number": "4111111111111111",
    "expiryMonth": "08",
    "expiryYear": "2018",
    "cvc": "737"
  },
  "returnUrl": "https://your-company.com/checkout/",
  "merchantAccount": "YourMerchantAccount"
}

If the payment is successful you receive:

pspReference: Our unique identifier for the transaction.

resultCode: Authorised. You can present this result to the shoppe


*/