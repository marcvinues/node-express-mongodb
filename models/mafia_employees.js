const { Int32 } = require('mongodb')
const moongose = require('mongoose')

const mafiaEmployeesSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  mafia_id: {
    type: Int32,
    required: true
  },
  special_surveillance: {
    type: Boolean
  }
})

module.exports = mongoose.model('mafiaEmployees', mafiaEmployeesSchema)