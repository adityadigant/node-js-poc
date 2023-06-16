const mongoose = require("mongoose");

// Email Model
const emailSchema = new mongoose.Schema({
  emails: {
    type: {String},
    default:null
  },
});

const Emails = mongoose.model("Emails", emailSchema);

module.exports = Emails;
