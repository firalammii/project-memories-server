import express from "express";
import { fetchPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";


const router = express.Router()

router.get('/fetch', fetchPosts);
router.post('/post', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost)

// router.put('/like/:id', likePost)

export default router;