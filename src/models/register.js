const mongoose = require('mongoose');
const validator = require('validator')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,

        validate(value) {
            if (validator.isEmail(value)) {
                console.log("Validation Complete");
            }
        }

    }
});

//Collection Name
const User = mongoose.model('User', userSchema);
module.exports = User;