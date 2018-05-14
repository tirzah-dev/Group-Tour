const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const travelerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
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
    },
    phone:{
        type: Number,
        required: false
    },
    trips:[{
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }],
    isAdmin:{
        type: Boolean,
        default: false
    }
});

travelerSchema.pre("save", function(next){
    const traveler = this;
    if(!traveler.isModified("password")) return next();
    bcrypt.hash(traveler.password, 10, (err, hash) => {
        if (err) return next(err);
        traveler.password = hash;
        next();
    });
});

travelerSchema.methods.checkPassword = function (passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err);
        callback(null, isMatch);
    })
}

travelerSchema.methods.withoutPassword = function(){
    const traveler = this.toObject();
    delete traveler.password;
    return traveler;
}

module.exports = mongoose.model("Traveler", travelerSchema);