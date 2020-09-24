const moongose = require('mongoose')

const mafiaEmployeesSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  mafia_id: {
    type: Number,
    required: true
  },
  special_surveillance: {
    type: Boolean
  },
  mafia: {
    required: true,
    type: moongose.Schema.Types.ObjectId,
    ref: 'Mafia'
  }
})

module.exports = mongoose.model('MafiaEmployees', mafiaEmployeesSchema)