const moongose = require('mongoose')

const fbiSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  }
})

module.exports = mongoose.model('fbi', fbiSchema)