const moongose = require('mongoose')

const MembersSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  member_type:{
    type: moongose.Schema.Types.ObjectId,
    required: true,
    ref: 'Mafia'
  }
})

module.exports = mongoose.model('Members', MembersSchema)