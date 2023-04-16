import PostsModel from "../models/posts-model.js"

export const fetchPosts = async(req, res) =>{
    console.log('fetching posts...')
    try {
        const posts = await PostsModel.find({});
        res.status(200).json(posts);
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
}

export const createPost = async(req,res) =>{
    console.log('creating post...');
    try {
        const postData = new PostsModel(req.body)
        const created = await postData.save();
        res.status(201).json(created)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const updatePost = async(req,res) => {
    console.log('updating post...')
    try {
        const { id } = req.params;
        await PostsModel.findByIdAndUpdate(id, req.body);
        res.status(201).json(req.body)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deletePost = async(req, res) => {
    console.log('deleting post...')
    try {
        const {id} = req.params;
        const deleted = await PostsModel.findByIdAndRemove(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
    }
};