require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/db");


// creating an express app

const app = express();




// connect to the databaseconst connectToDatabase = require("./database/db");
connectToDatabase();




// start the server
PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});