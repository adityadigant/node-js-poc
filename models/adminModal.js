const mongoose = require("mongoose");

// Admin Model
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  emails: [{
    type: String,
    default:null
  }],
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
