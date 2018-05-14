const express = require("express");
const tripsRouter = express.Router();
const Trip = require("../models/trip");

//goal: get all trips everywhere
//current status: working
tripsRouter.get("/", (req, res) => {
    Trip.find(req.query, (err, trips) => {
        if (err) return res.status(500).send(err);
        return res.send(trips);
    });
});
//goal: get all trips associated with a specific traveler
//current status: returns all trips everywhere
// Do we loop through on the front end? so we don't need this route targeted at just pulling travelers. OR does this have something to do with authorization...?
tripsRouter.get("/travelers/:travelerId", (req, res) => {
    Trip.find({travelerId: req.params.travelerId}, (err, trips) => {
        if (err) return res.status(500).send(err);
        return res.send(trips);
    });
});
//goal: create new trip
//current status: working
tripsRouter.post("/", (req, res) => {
    const trip = new Trip(req.body);
    trip.traveler = req.traveler;
    trip.save(function (err, newTrip) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTrip);
    });
});
//goal: Get one trip
//current status: works
tripsRouter.get("/:tripId", (req, res) => {
    Trip.findOne({_id: req.params.tripId}, (err, trip) => {
        if (err) return res.status(500).send(err);
        if (!trip) return res.status(404).send("Trip not found.");
        return res.send(trip);
    });
});
//goal: edit main trip
//current status: works to edit the main trip
// notes: not sure how to test adding a new activity or traveler or how to remove an activity or traveler from the trip... I might be getting the syntax wrong.
tripsRouter.put("/:tripId", (req, res) => {
    Trip.findOneAndUpdate({_id: req.params.tripId},
        req.body,
        {new: true},
        (err, trip) => {
            if (err) return res.status(500).send(err);
            return res.send(trip);
        }
    );
});

tripsRouter.put("/:tripId/activities/:activityId", (req, res)=> {
    Trip.findById(req.params.tripId, (err, trip) => {
        if (err) return res.status(500).send(err);
        const activity = trip.activities.id(req.params.activityId);
        activity.set(req.body);
        trip.save(function (err, newTrip) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newTrip);
        });
    });
})

tripsRouter.post("/:tripId/activities", (req, res) =>{
    Trip.findByIdAndUpdate(req.params.tripId,
        {$push: { activities: req.body}}, 
        {new: true},
        (err, trip) => {
            if (err) return res.status(500).send(err);
            return res.send(trip);
        });
});

//goal: delete one trip
//current status: works
tripsRouter.delete("/:tripId", (req, res) => {
    Trip.findOneAndRemove({_id: req.params.tripId}, (err, trip) =>{
        if(err) return res.status(500).send(err);
        return res.send(trip);
    });
});

module.exports = tripsRouter;