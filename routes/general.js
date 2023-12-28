const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req,res) => {
    console.log("Inside rou");
    res.sendFile(path.join(__dirname,'/../client/public/homepage.html'));
});

module.exports = router;