const express = require("express");
const expressJwt = require("express-jwt");
const Traveler = require("../models/traveler");

const travelerRoute = express.Router();

const auth = expressJwt({secret: process.env.SECRET});

travelerRoute.use(auth);

travelerRoute.get((req, res) => {
    Traveler.findById(req.traveler._id, (err, traveler) => {
        if (err) return res.status(500).send({success: false, err})
        if (traveler === null) return res.status(400).send({success: false, err: "Traveler not found!"})
        return res.status(200).send({success: true, traveler: traveler.withoutPassword()})
    })
});


module.exports = travelerRoute;