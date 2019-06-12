const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const constants = require('./utils/constants')

const paymentMethods = require('./controllers/payment-methods');
const paymentMethodsRoute = constants.routes.paymentMethods;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// start routes
app.use(paymentMethodsRoute, paymentMethods);

module.exports = app;
