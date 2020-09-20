const { Int32 } = require('mongodb')
const moongose = require('mongoose')

const mafiaStatusSchema = new moongose.Schema({
  member_type: {
    type: String,
    required: true
  },
  member_status: {
    type: Int32,
    required: true
  },
  date: {
    type: Date
  }
})

module.exports = model.fbiSchema('mafiaStatusSchema', mafiaStatusSchema)