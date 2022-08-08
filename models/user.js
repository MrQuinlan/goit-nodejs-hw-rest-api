const { Schema, model } = require("mongoose");

const userAddSchema = new Schema({
    password: {
        type: String,
        minlength: 6,
        required: [true, "Password is required"],
    },

    email: {
        type: String,
        match: /[a-z0-9]+@[a-z]+\.[a-z]{3,}/,
        required: [true, "Email is required"],
        unique: true,
    },

    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },

    avatarURL: {
        type: String,
    },

    token: {
        type: String,
        default: null,
    },
});

const user = model("user", userAddSchema);

module.exports = user;
