import PostsModel from "../models/posts-model.js"

export const fetchPosts = async(req, res) =>{
    console.log('fetching  ....')

    try {
        const posts = await PostsModel.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message: error.message})
    }
}

export const createPost = async(req,res) =>{
    console.log('creating ....')
    const reqBody =req.body;
    try {
        // const savedPost = await postData.save()
        const postData = new PostsModel(reqBody)
        await postData.save()
    
        res.status(201).json(postData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updatePost = async(req,res) => {
    console.log('updating ......')
    try {
        const npost = req.body;
        await PostsModel.findByIdAndUpdate(npost._id, npost)
        res.status(201).json(npost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deletePost = async(req, res) => {
    console.log('deleting .......')
    try {
        const {id} = req.params;
        const deleted = await PostsModel.findOneAndRemove(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
    }
}