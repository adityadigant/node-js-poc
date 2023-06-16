const mongoose = require("mongoose");

// Question Model
const questionSchema = new mongoose.Schema({
  Questions: {
    type: String,
    required: true,
    
  },
  A: {
    type: String,
    required: true,
  },

  B: {
    type: String,
    required: true,
  },

  C: {
    type: String,
    required: true,
  },

  D: {
    type: String,
    required: true,
  },

  Correct: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
