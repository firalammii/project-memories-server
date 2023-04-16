import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: {},
    title: String,
    body: String,
    tags: [],
    likes: {
        type: Number,
        default:0
    },
    date: {
        type:Date,
        default: new Date()
    },
    publicPost: {
        type: Boolean,
        default: false
    },
    postPic: String,
});

const PostsModel = mongoose.model('posts', postSchema)

export default PostsModel;