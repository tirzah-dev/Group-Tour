const express = require("express");
const expressJwt = require("express-jwt");
const travelersRouter = express.Router();
const Traveler = require("../models/traveler");

const auth = expressJwt({secret: process.env.SECRET});

travelersRouter.use(auth);

//goal: create a traveler at registration
//current: works
// travelersRouter.post("/", (req, res) => {
//     const traveler = new Traveler(req.body);
//     traveler.save(function (err, newTraveler) {
//         if (err) return res.status(500).send(err);
//         return res.status(201).send(newTraveler);
//     });
// });
//goal: get all travelers everywhere
//current status:works
travelersRouter.get("/", (req, res) => {
    Traveler.find(req.query, (err, travelers) => {
        if (err) return res.status(500).send(err);
        return res.send(travelers);
    });
});

//goal: get all travelers associated with a trip
//currently: returns all travelers everywhere.
// do we loop through on the front end? so this should just be a generic get all travelers??? OR does this have something to do with authorization...?
travelersRouter.get("/trips/:tripId", (req, res) => {
    Traveler.find({ trips: req.params.tripId }, (err, travelers) => {
        if (err) return res.status(500).send(err);
        return res.send(travelers);
    });
});
//goal: get one traveler not associated with a trip
//current status: pulls all travelers everywhere
travelersRouter.get("/:travelerId", (req, res) => {
    //include populate here
    Traveler.findById({ _id: req.params.travelerId })
        .populate("trips")
        .exec((err, traveler) => {
        if (err) return res.status(500).send({ success: false, err })
        if (traveler === null) return res.status(400).send({ success: false, err: "Traveler not found!" })
        return res.status(200).send({ success: true, traveler: traveler.withoutPassword() })
    })
});
//goal: edit a traveler
//current status: working
travelersRouter.put("/:travelerId", (req, res) => {
    Traveler.findOneAndUpdate({ _id: req.params.travelerId },
        req.body,
        { new: true },
        (err, traveler) => {
            if (err) return res.status(500).send(err);
            return res.send(traveler);
        }
    );
});
// goal: delete one traveler's entire profile and remove their id from all trip
//current status: delete's traveler but does not remove their id from all trips.
travelersRouter.delete("/:travelerId", (req, res) => {
    Traveler.findOneAndRemove({ _id: req.params.travelerId }, (err, traveler) => {
        if (err) return res.status(500).send({ success: false, err: "Intenal Server Error!" });
        if (traveler === null) return res.status(400).send({ success: false, err: "Traveler not found!" })

        //delete traveler from all trips
        return res.send(traveler);
    });
});



module.exports = travelersRouter;