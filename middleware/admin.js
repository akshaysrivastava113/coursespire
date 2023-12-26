const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const user = await Admin.find({username: username});
    const passwordFound = user[0].password;
    console.log(passwordFound);
    if(passwordFound !== password){
        console.log("Password Incorrect");
        res.json('INcorrect Password');
    } else {
        console.log("Password Correct");
        next();
    }
}

module.exports = adminMiddleware;