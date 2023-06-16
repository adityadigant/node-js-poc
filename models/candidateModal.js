const mongoose = require("mongoose");

// Candidate Model
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
