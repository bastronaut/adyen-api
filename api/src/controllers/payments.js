const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')
const PaymentsService = require('../services/payments-service');

const paymentsService = new PaymentsService();
const root = constants.routes.root;


router.post(root, function (req, res, next) {

  if (!req.body.hasOwnProperty('paymentMethod') || req.body.paymentMethod.hasOwnProperty('type')) {
    res.status(400).json({ "error": "todo" });
  }

  paymentsService.makePayment()

});

module.exports = router;

