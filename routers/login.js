const Admin = require("../models/adminModal");
const Email = require("../models/emailModal")

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const csvParser = require('csv-parser');
const login = require("../controller/login")

router.post("/",login.login)


module.exports = router;
