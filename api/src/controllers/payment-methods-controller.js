const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')
const PaymentMethodsService = require('../services/payment-methods-service');

const paymentMethodsService = new PaymentMethodsService();
const root = constants.routes.root;

/**
 * Would make more sense as POST to match Adyen API
 */
router.get(root, function (req, res, next) {

  const amountValue = req.query.a;
  const currency = req.query.c;
  const countryCode = req.query.cc;

  paymentMethodsService.getPaymentMethods(amountValue, currency, countryCode, (response, error) => {
    if (error) {
      res.status(400).json(error);
    } else {
      res.status(200).json(response);
    }
  });

});


module.exports = router;

