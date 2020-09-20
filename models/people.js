const moongose = require('mongoose')

const peopleSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  boss_id: {
    type: String,
    unique: true
  },
  status: {
    type: String
  }

})

module.exports = mongoose.model('people', peopleSchema)