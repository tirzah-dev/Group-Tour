const express = require("express");
const activityRouter = express.Router();
const Activity = require("../models/activity");

activityRouter.get("/", (req, res) => {
    Activity.find({traveler: req.traveler._id}, (err, activities) => {
        if (err) return res.status(500).send(err);
        return res.send(activities);
    });
});

activityRouter.post("/", (req, res) => {
    const activity = new Activity(req.body);
    activity.traveler = req.traveler;
    activity.save(function (err, newActivity) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newActivity);
    });
});

activityRouter.get("/:activityId", (req, res) => {
    Activity.findOne({_id: req.params.activityId, traveler: req.traveler._id}, (err, activity) => {
        if (err) return res.status(500).send(err);
        if (!activity) return res.status(404).send("Activity not found.");
        return res.send(activity);
    });
});

activityRouter.put("/:activityId", (req, res) => {
    Activity.findOneAndUpdate(
        {_id: req.params.activityId,traveler: req.traveler._id},
        req.body,
        {new: true},
        (err, activity) => {
            if (err) return res.status(500).send(err);
            return res.send(activity);
        }
    );
});

activityRouter.delete("/:activityId", (req, res) => {
    Activity.findOneAndRemove({_id: req.params.activityId, traveler: req.traveler._id}, (err, activity) => {
        if (err) return res.status(500).send(err);
        return res.send(activity);
    });
});

module.exports = activityRouter;
