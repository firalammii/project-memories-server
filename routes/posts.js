import express from "express";

import { fetchPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router()

router.get('/posts', fetchPosts);
router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost)

export default router;