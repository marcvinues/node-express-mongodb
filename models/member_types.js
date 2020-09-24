const mongoose = require('mongoose')

// Member type
const mem_type = {
  values: ['boss', 'employee'],
  message: '{VALUE} is not a valid member'
}

const MemberTypessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  member_type:{
    type: String,
    required: true,
    enum: mem_type
  },
  special_surveillance: {
    type: Boolean
  },
  prison:{
    type: Boolean
  },
  member: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Members'
  }
})

module.exports = mongoose.model('MemberTypes', MemberTypessSchema)