import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routerPosts from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit:"30mb", extenteded: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts', routerPosts)

// const DB_CONNECTION_URI = 'mongodb+srv://firalammy:7ONMtuZOuf5fMlWl@cluster0.n8gmagp.mongodb.net/?retryWrites=true&w=majority';
const DB_CONNECTION_URI = 'mongodb://localhost/memories_project'

const PORT = process.env.PORT || 3000;

mongoose.connect(DB_CONNECTION_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() =>app.listen(PORT, () => console.log(`succesfull connection to db PORT ${PORT} ....`)))
.catch(err => console.log( err +'\nunable to connect'))

