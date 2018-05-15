const express = require("express");
const Traveler = require("../models/traveler");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");


//goal: create a traveler at registration
//current: working
authRouter.post("/signup", (req, res) => {
    Traveler.findOne({ username: req.body.username }, (err, existingTraveler) => {
        if (err) return res.status(500).send({ success: false, err });
        if (existingTraveler !== null) {
            return res.status(400).send({ success: false, err: "That username already exists!" });
        }
        const newTraveler = new Traveler(req.body);
        newTraveler.save((err, traveler) => {
            if (err) return res.status(500).send({ success: false, err });
            const token = jwt.sign(traveler.toObject(), process.env.SECRET);
            return res.status(201).send({ success: true, traveler: traveler.withoutPassword(), token });

        }); 
    });
});

//goal: login with a valid user
//current: testing
authRouter.post("/login", (req, res) => {
    Traveler.findOne({ username: req.body.username.toLowerCase() }, (err, traveler) => {
        if (err) return res.status(500).send(err);
        if (!traveler) {
            return res.status(403).send({ success: false, message: "Invalid username!" })
        }
        traveler.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) return res.status(401).send({ success: false, message: "Invalid password!" })
            const token = jwt.sign(traveler.toObject(), process.env.SECRET, { expiresIn: "24h" });
            return res.status(200).send({ token: token, traveler: traveler.withoutPassword(), success: true, message: "Here's your token!" })
        })
    });
});

module.exports = authRouter;