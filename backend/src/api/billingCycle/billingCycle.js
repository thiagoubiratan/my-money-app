const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, require: true, min: 0 }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, require: true, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, require: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, require: true, min: 0, max: 12 },
    year: { type: Number, require: true, min: 1970, max: 2100 },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)