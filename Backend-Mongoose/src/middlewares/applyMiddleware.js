const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");
const applyMiddleware = (app) => {

    //middleware
    app.use(cors({
        origin: [
            //    url will be setup into config file
            LOCAL_CLIENT,
            CLIENT
        ],
        credentials: true
    }));

    app.use(express.json());
    // app.use(cookie - parser());
};

module.exports = applyMiddleware //middleware will be send here
