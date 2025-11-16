const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    stageName: String,
    gender: String,
    ethnicities: [String],
    age: Number,
    location: String,
    skills: [String]
});

module.exports = mongoose.model("Profile", ProfileSchema);
