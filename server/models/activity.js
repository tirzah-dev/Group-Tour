const mongoose = require("mongoose");

const { Schema } = mongoose;

const activitySchema = new Schema ({
    name:{
        type:String,
        required: true
    },
    totalVotes:{
        type: Number,
    },
    description:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Activity", activitySchema);




