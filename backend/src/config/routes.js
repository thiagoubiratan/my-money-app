const express = require('express')

module.exports = function (server) {
    //Define URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas Ciclo de pagamento 
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}