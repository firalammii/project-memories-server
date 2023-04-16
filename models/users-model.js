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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts'
        }
    ]

});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;