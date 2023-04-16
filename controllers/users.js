import UsersModel from "../models/users-model.js";

export const fetchUsers = async (req, res) => {
    console.log('fetching users...');
    try {
        const users = await UsersModel.find({}).populate('posts');
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
};

export const createUser = async (req, res) => {
    console.log('creating user...');
    try {
        const userData = new UsersModel(req.body);
        const created = await userData.save();
        res.status(201).json(created);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const updateUser = async (req, res) => {
    console.log('updating user...');
    try {
        const { id } = req.params;
        const updated = await UsersModel.findByIdAndUpdate(id, req.body).populate('posts');
        res.status(201).json(updated);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const addUserPost = async (req, res) => {
    console.log('adding user post...');
    try {
        const { id } = req.params;
        const user = await UsersModel.findById(id);
        const nuser = { ...user, posts: [req.body, ...user.posts] };

        const updated = await UsersModel.findByIdAndUpdate(id, nuser).populate('posts');
        res.status(201).json(updated);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const deleteUser = async (req, res) => {
    console.log('deleting user...');
    try {
        const { id } = req.params;
        const deleted = await UsersModel.findByIdAndRemove(id);
        res.status(200).json(deleted);
    } catch (error) {
        console.log(error);
    }
};