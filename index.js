const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const generalRouter = require("./routes/general");
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/client'));
app.use("/", generalRouter)
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
