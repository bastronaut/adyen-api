const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')
const PaymentMethodsService = require('../services/payment-methods-service');

const paymentMethodsService = new PaymentMethodsService();
const root = constants.routes.root;


router.get(root, function (req, res, next) {

  const result1 = paymentMethodsService.getPaymentMethods(500);
  const result2 = paymentMethodsService.getPaymentMethods(500, "USD");
  const result3 = paymentMethodsService.getPaymentMethods(500, "USD", "US");




  const amount = req.query.a;
  const currency = req.query.c;
  const countryCode = req.query.cc;
  res.status(200).json(result1);
  // res.status(200).json({ "hi": "theres" });
});

module.exports = router;

