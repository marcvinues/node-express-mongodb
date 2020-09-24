const moongose = require('mongoose')

const mafiaStatusSchema = new moongose.Schema({
  mafia_name: {
    type: String,
    required: true
  },
  fbi: {
    required: true,
    type: moongose.Schema.Types.ObjectId,
    ref: 'Fbi'
  }
})

module.exports = model.fbiSchema('Mafia', mafiaStatusSchema)