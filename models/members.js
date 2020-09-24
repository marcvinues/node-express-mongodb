const mongoose = require('mongoose')

const MembersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  member_type:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Mafia'
  }
})

module.exports = mongoose.model('Members', MembersSchema)