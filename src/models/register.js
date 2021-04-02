const mongoose = require('mongoose');
const validator = require('validator')


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        minlength: 3,
        required: true

    },
    lastname: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,

        validate(value) {
            if (validator.isEmail(value)) {
                console.log("Validation Complete");
            }
        }

    },

    password: {
        type: String,
        required: true

    },
    confirmpassword: {
        type: String,
        required: true

    }


});

//Collection Name
const User = mongoose.model('User', userSchema);
module.exports = User;