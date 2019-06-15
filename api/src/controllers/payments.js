const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')
const PaymentsService = require('../services/payments-service');

const paymentsService = new PaymentsService();
const root = constants.routes.root;

/**
 * POST to /payments for performing payments
 * 
 * TODO: ideally shopperReference is generated through some session header
 */
router.post(root, function (req, res, next) {

  // some simple validation logic below 
  if (!isValidPaymentMethod(req.body)) {
    return returnErrorResponse(constants.errorMessages.paymentMethodMissing, res);
  }

  if (!isValidPaymentAmount(req.body)) {
    return returnErrorResponse(constants.errorMessages.paymentAmountMissing, res);
  }


  try {
    paymentsService.makePayment(req.body, (resultBody, error) => {
      if (error) {
        return returnErrorResponse(error, res);
      } else {
        res.status(200).json(resultBody);
      }
    });
  } catch (error) {
    return returnErrorResponse(error, error);
  }
});


// Validation methodes below can be extended to include more validation logic
const isValidPaymentMethod = (requestBody) => {
  return (requestBody.hasOwnProperty('paymentMethod') && requestBody.paymentMethod.hasOwnProperty('type'));
}

const isValidPaymentAmount = (requestBody) => {
  return (req.body.hasOwnProperty('amount') && req.body.amount.hasOwnProperty('value') && req.body.amount.hasOwnProperty('currency'));
}

const createErrorMessage = (errorStatus, errorMessage) => {
  return {
    'error': errorStatus,
    'errorMessage': errorMessage
  };
}


/**
 * Returns an error status 400 with a given error message
 * @param {*} errorMessage the error message
 * @param {*} res The response object to respond with
 */
const returnErrorResponse = (errorMessage, res) => {
  var errorMessage = createErrorMessage(constants.errorStatus.badRequest, errorMessage);
  return res.status(400).json(errorMessage);
}


module.exports = router;

