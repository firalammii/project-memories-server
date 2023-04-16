import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        // require
    },
    email: {
        type: String,
        // required
    },
    pp: {
        type: String,
        // required
    },
    pwd: {
        type: String,
        // required
    },

});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;