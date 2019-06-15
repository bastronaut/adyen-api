const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const constants = require('./utils/constants')


const paymentMethodsController = require('./controllers/payment-methods');
const paymentMethodsRoute = constants.routes.paymentMethods;

const paymentsController = require('./controllers/payments');
const paymentsRoute = constants.routes.payments;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// start routes
app.use(paymentMethodsRoute, paymentMethodsController);
app.use(paymentsRoute, paymentsController);

module.exports = app;


