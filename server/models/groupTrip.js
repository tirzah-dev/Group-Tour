const mongoose = require("mongoose");

const { Schema } = mongoose;

const tripSchema = new Schema({
    destination:{
        type:String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: { //do we really need an end date??
        type: Date,
        required: false
    },
    travelers:{
        type: Array,
        required: false
    },
    activities:{
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("GroupTrip", tripSchema);