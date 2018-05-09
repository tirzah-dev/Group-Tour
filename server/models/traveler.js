const mongoose = require("mongoose");

const { Schema } = mongoose;

const travelerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{ //does this reside here??
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
    phone:{
        type: Number,
        required: false
    },
    groupTrips:{
        type: Array,
        required: false
    },
    isAuthorized:false,
    isAdmin:false
});

module.exports = mongoose.model("Traveler", travelerSchema);