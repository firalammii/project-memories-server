import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: String,
    title:String,
    body:String,
    pic: String,
    tags: [],
    likes: {
        type: Number,
        default:0
    },
    date: {
        type:Date,
        default: new Date()
    }
});

const PostsModel = mongoose.model('posts', postSchema)

export default PostsModel;