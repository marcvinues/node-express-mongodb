const moongose = require('mongoose')

const fbiSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  surveillance: {
    type: Boolean
  }
})

module.exports = model.fbiSchema('fbi', fbiSchema)