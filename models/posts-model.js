import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        // require
    },
    body: {
        type: String,
        // required
    },
    tags: [],
    likes: {
        type: Number,
        default:0
    },
    date: {
        type:Date,
        default: new Date()
    },
    postPic: {
        type: String,
        // required
    },
    publicPost: {
        type: Boolean,
        default: false
    }
});

const PostsModel = mongoose.model('posts', postSchema)

export default PostsModel;