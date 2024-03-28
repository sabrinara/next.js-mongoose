const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {

    let connectionURI ;

    if (process.env.NODE_ENV === "development") {
        connectionURI = process.env.DATABASE_LOCAL
        connectionURI = connectionURI.replace("<username>", process.env.DATABASE_LOCAL_USERNAME);
        connectionURI = connectionURI.replace("<password>", process.env.DATABASE_LOCAL_PASSWORD);
    } else {
        connectionURI = process.env.DATABASE_PROD
    }

    return connectionURI

};

const connectDB = async () => {
    const uri = getConnectionString();

    await mongoose.connect(uri, {dbName: process.env.DB_NAME});
    console.log("Connected to DATABASE");
};  

module.exports = connectDB