// import { url } from "inspector";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const tripSchema = new Schema({


    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },

    endDate: {
        type: Date,
        required: false
    },
    travelers:{
        type: Array,
        required: false
    },
    activities:[{
        activity: {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        },
        upvotes: {
            type: Number,
            default: 0
        }
    }],
});

module.exports = mongoose.model("Trip", tripSchema);