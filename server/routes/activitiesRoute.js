const express = require("express");
const activitiesRouter = express.Router();
const Activity = require("../models/activity");

activitiesRouter.get("/", (req, res) => {
    Activity.find(req.query, (err, activities) => {
        if (err) return res.status(500).send(err);
        return res.send(activities);
    });
});

activitiesRouter.post("/", (req, res) => {
    const activity = new Activity(req.body);
    activity.trip = req.trip;
    activity.save(function (err, newActivity) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newActivity);
    });
});

activitiesRouter.get("/:activityId", (req, res) => {
    Activity.findOne({_id: req.params.activityId}, (err, activity) => {
        if (err) return res.status(500).send(err);
        if (!activity) return res.status(404).send("Activity not found.");
        return res.send(activity);
    });
});

activitiesRouter.put("/:activityId", (req, res) => {
    Activity.findOneAndUpdate(
        {_id: req.params.activityId},
        req.body,
        {new: true},
        (err, activity) => {
            if (err) return res.status(500).send(err);
            return res.send(activity);
        }
    );
});
activitiesRouter.delete("/:activityId", (req, res) => {
    Activity.findOneAndRemove({_id: req.params.activityId}, (err, activity) => {
        if (err) return res.status(500).send(err);
        return res.send(activity);
    });
});

module.exports = activitiesRouter;
