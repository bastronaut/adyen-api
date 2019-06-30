const express = require('express');
const router = express.Router();
const constants = require('../utils/constants')
const PaymentDetailsService = require('../services/payment-details-service');

const paymentDetailsService = new PaymentDetailsService();
const root = constants.routes.root;

/**
 * POST to /payments for performing payments
 * 
 * TODO: ideally shopperReference is generated through some session header
 */
router.post(root, function (req, res, next) {


});



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

