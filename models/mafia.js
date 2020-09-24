const mongoose = require('mongoose')

const mafiaStatusSchema = new mongoose.Schema({
  mafia_name: {
    type: String,
    required: true
  },
  fbi: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fbi'
  }
})

module.exports = mongoose.model('Mafia', mafiaStatusSchema)