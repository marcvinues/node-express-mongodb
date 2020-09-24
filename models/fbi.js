const moongose = require('mongoose')

const fbiSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Fbi', fbiSchema)