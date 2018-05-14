const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000;
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/activities", require("./routes/activitiesRoute"));
app.use("/api/travelers", require("./routes/travelersRoute"));
app.use("/api/trips", require("./routes/tripsRoute"));
app.use("/auth", require("./routes/authRoutes"));

const database = process.env.MONGODB_URI || "mongodb://localhost/trips";
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(database,
    (err) => {
        if (err) throw err;
        console.log("Connected to the database with sweet, sweet code!");
    }
);
// mongoose.connect(database, (err) => {
//     if (err) console.error(err);
//     console.log("Connected to MongoDB");
// })

app.listen(PORT, () => console.log("Server running in PORT: " + PORT));