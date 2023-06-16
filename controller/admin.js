const Admin = require("../models/adminModal");
const Candidate = require("../models/candidateModal");
const Question = require("../models/questionModal");


const router = require("express").Router();
const jwt = require("jsonwebtoken");
const csvParser = require("csv-parser");

// console.log(Email, "asd");

function getCandidates(req, res,next){
  Candidate.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
} 

function getQuestionSet(req, res,next){
  Question.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
} 

module.exports = {getCandidates,getQuestionSet};
