const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  member_type: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Mafia",
  },
  member_position: {
    type: String,
    required: true
  },
  special_surveillance: {
    type: Boolean,
  },
  years_as_member: {
      type: Number
  },
  prision: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Members", MembersSchema);
