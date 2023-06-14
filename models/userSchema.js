const mongoose = require('mongoose')
const validator = require('validator')

/* creating user schema */
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw Error("not a valid email")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "In-Active"],
        default: "Active"
    },
    dateCreated: Date,
    dateUpdated: Date
})

// defining model
const users = new mongoose.model("users", userSchema)
module.exports = users;