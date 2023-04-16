import express from "express";

import { fetchUsers, createUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get('/users', fetchUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;