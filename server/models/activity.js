const mongoose = require("mongoose");

const { Schema } = mongoose;

const activitySchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    destination: [String]
});

module.exports = mongoose.model("Activity", activitySchema);




