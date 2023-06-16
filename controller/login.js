const Admin = require("../models/adminModal");
const jwt = require("jsonwebtoken");

async function login(req, res, next){
    try {
        const { email, password, role } = req.body;
    
        if (!email || !password || !role) {
          return res
            .status(400)
            .json({ message: "Please provide all the required fields" });
        }
        // console.log(Admin,"Admin");
        if (role == "admin") {
          const admin = await Admin.findOne({ email });
    
          if (!admin) {
            return res.status(401).json({ message: "Email not found" });
          }
          if (password != admin.password) {
            return res.status(401).json({ message: "Password incorrect" });
          }
          console.log(admin, "admin");
          console.log(admin.name, " name:admin.name");
          console.log(admin.email, " name:admin.email");
    
          const token = jwt.sign(
            {
              email: admin.email,
              role: admin.role,
              name: admin.name,
            },
            process.env.JWT_SECRET
          );
    
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
              // sameSite: "none",
            })
            .json({
              message: "Successfully loggedin",
              accessToken: token,
              status: 200,
            });
        } else if (role == "candidate") {
        } else {
          return res.status(400).json({ message: "Incorrect role" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send();
      }
}

module.exports = {login}