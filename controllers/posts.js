import PostsModel from "../models/posts-model.js"

export const fetchPosts = async(req, res) =>{
    console.log('fetching  ....')

    try {
        const posts = await PostsModel.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
}

export const createPost = async(req,res) =>{
    console.log('creating ....')
    const reqBody =req.body;
    try {
        const postData = new PostsModel(reqBody)
        const created = await postData.save();
        res.status(201).json(created)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const updatePost = async(req,res) => {
    console.log('updating ......')
    try {
        const { id } = req.params;
        const npost = req.body;
        await PostsModel.findByIdAndUpdate(id, npost)
        res.status(201).json(npost)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deletePost = async(req, res) => {
    console.log('deleting .......')
    try {
        const {id} = req.params;
        const deleted = await PostsModel.findByIdAndRemove(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
    }
}

// export const likePost = async (req, res) => {
//     console.log('liking ......');
//     try {
//         const { id } = req.params;
//         const npost = req.body;
//         const likedPost = await updatePost(id, npost);
//         res.status(201).json(likedPost);
//     } catch (error) {
//         console.log(error);
//     }
// };