const Admin = require("../models/adminModal");
const Email = require("../models/emailModal");

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const csvParser = require("csv-parser");
const admin = require("../controller/admin")
// console.log(Email, "asd");

router.get("/getCandidates",admin.getCandidates) 
router.get("/getQuestionSet",admin.getQuestionSet) 


module.exports = router;

// router.get("/getEmails", (req, res) => {
//     Email.find()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => {
//       console.error('Error retrieving data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });
// module.exports = router;