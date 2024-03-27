const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//called middleware from applyMiddleware
applyMiddleware(app);


app.get("/health", (req, res) => {
    res.send("Backend Server is Running");
});

//for Error Handling ,if URL is Invalid 
//error is here in the next variable ,in the below 4 lines codes the middleware will handle it
app.all("*", (req, res, next) => {
    const error = new Error(`The Requested URL is Invalid: [${req.url}]`);
    error.status = 404;
    next(error);
});

//for Error Handling if any Error is thrown by any middleware
//for error handling it is a global middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
    });
});

app.listen(port, (req, res) => {
    console.log(`Backend  Server running On Port: ${port}`);
});

