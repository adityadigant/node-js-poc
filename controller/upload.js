const Candidate = require("../models/candidateModal")
const Question = require("../models/questionModal")


const csvParser = require('csv-parser');


function uploadCandidate(req, res,next){

    const results = [];
    req.pipe(csvParser())
      .on('data', (data) => {

        results.push(data);
      })
      .on('end', () => {
        // Save emails to MongoDB
        let emailData = [...results]
        console.log(emailData,"ressssssults");
        // Admin

        Candidate.findOne()
          .then((document) => {
            // console.log(document)
            if(!document || document === null ){
                Candidate.create(emailData)
                .then(() => { 
                    res.status(200).send('Emails saved to MongoDB');
                }).catch((err) => {
                    console.error('Error saving emails:', err);
                    res.status(500).send('Internal server error');
                  });
            }
            else{
                
                // document.push(emailData)
              

            
                Candidate.insertMany(emailData)
                res.status(200).send('Emails saved to MongoDB');
            }
          })
          .catch((err) => {
            console.error('Error saving emails:', err);
            res.status(500).send('Internal server error');
          });
      });
  
}

function uploadQuestionSet(req, res,next){

  const set = req.query.set
  console.log(set,"req.query.id");
    const results = [];
    req.pipe(csvParser())
      .on('data', (data) => {

        results.push(data);
      })
      .on('end', () => {
        // Save emails to MongoDB
        let emailData = [...results]
        console.log(emailData,"QuestionSet");
        // Admin

        Question.findOne()
          .then((document) => {
            console.log(document)
            if(!document || document === null ){
                Question.create(emailData)
                .then(() => { 
                    res.status(200).send('questions saved to MongoDB');
                }).catch((err) => {
                    console.error('Error saving questions:', err);
                    res.status(500).send('Internal server error');
                  });
            }
            else{
                
                // document.push(emailData)
              

            
                Question.insertMany(emailData)
                res.status(200).send('questions saved to MongoDB');
            }
          })
          .catch((err) => {
            console.error('Error saving questions:', err);
            res.status(500).send('Internal server error');
          });
      });
  
}


  
module.exports = {uploadCandidate,uploadQuestionSet};
