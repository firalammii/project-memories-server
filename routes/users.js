import express from "express";

import { fetchUsers, createUser, updateUser, addUserPost, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get('/users', fetchUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.put('/add-user-post/:id', addUserPost);
router.delete('/delete/:id', deleteUser);

export default router;