import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 25
    },

    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    }
});
const user = mongoose.model('user', userSchema);

export default user;