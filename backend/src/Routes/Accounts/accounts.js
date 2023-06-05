const express = require('express');
const routes = express.Router();
const accountsController = require('../../Controller/AccountsController/accounts.controller');

routes.get('/check',accountsController.checkAccounts)
routes.post('/create', accountsController.createAccount)
routes.post('/check-exists', accountsController.checkIfExists)

module.exports = routes