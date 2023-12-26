const express = require("express");
const app = express();
const router = express.Router();
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    //{ username: 'admin', password: 'pass' }
    const username = req.body.username;
    const password = req.body.password;
    const user = new Admin({
        username: username,
        password: password
    });

    const createdNewUser = await user.save();
    console.log(createdNewUser);
    res.status(200).json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    console.log("POST Courses");
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;