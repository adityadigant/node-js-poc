
const router = require("express").Router();
const upload = require("../controller/upload")

router.post('/upload', upload.uploadCandidate)
router.post('/uploadQuestion', upload.uploadQuestionSet)


  
  
module.exports = router;
