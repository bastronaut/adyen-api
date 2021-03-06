const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const constants = require('./utils/constants')
const cors = require('cors')

const paymentMethodsController = require('./controllers/payment-methods-controller');
const paymentMethodsRoute = constants.routes.paymentMethods;

const paymentsController = require('./controllers/payments-controller');
const paymentsRoute = constants.routes.payments;

const paymentDetailsController = require('./controllers/payment-details-controller');
const paymentDetailsRoute = constants.routes.paymentDetails;

const app = express();

app.use(logger('dev'));
// enables cors for all endpoint
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// start routes
app.use(paymentMethodsRoute, paymentMethodsController);
app.use(paymentsRoute, paymentsController);
app.use(paymentDetailsRoute, paymentDetailsController);

module.exports = app;


