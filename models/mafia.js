const moongose = require('mongoose')

const mafiaStatusSchema = new moongose.Schema({
  member_type: {
    type: String,
    required: true
  },
  member_status: {
    type: Number,
    required: true
  },
  fbi: {
    required: true,
    type: moongose.Schema.Types.ObjectId,
    ref: 'Fbi'
  }
})

module.exports = model.fbiSchema('Mafia', mafiaStatusSchema)