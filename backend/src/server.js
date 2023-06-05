const express = require('express');
const accountsRoute = require('./Routes/Accounts/accounts')
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json());

app.use('/createaccount',accountsRoute)

module.exports = app;