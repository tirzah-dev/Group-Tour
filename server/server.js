const express = require("express");
// const app = express();
// require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

const database = process.env.MONGODB_URI || "mongodb://localhost:27017/group-trips";
// connect to database
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/group-trip // how to name this",
//     {useMongoClient: true},  // helps get rid of deprecation warnings
//     (err) => {
//         if (err) throw err;
//         console.log("Connected to the database");
//     }
// );
mongoose.connect(database, (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})


app.listen(PORT, () => console.log("Server running in PORT: " + PORT));