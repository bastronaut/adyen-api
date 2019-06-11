const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')

const paymentMethodsRoute = constants.routes.paymentMethods;

/* GET payment methods */
router.get(paymentMethodsRoute, function(req, res, next) {
  res.json({"hi": "theres"});
});

module.exports = router;

