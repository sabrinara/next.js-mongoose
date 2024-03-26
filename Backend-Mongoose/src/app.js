const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => {
    res.send("Backend Server is Running");
  });
  
  //for Error Handling ,if URL is Invalid 
  app.all("*", (req, res, next) => {
    const error = new Error(`The Requested URL is Invalid: [${req.url}]`);
    error.status = 404;
    next(error);
  });
  
  //for Error Handling if any Error is thrown by any middleware
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
    });
  });
  

    app.listen(port, (req, res) => {
      console.log(`Backend  Server running On Port: ${port}`);
    });
  
