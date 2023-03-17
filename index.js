import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import routerPosts from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extenteded: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World this a memories project API");
})

app.use('/posts', routerPosts)

// const DB_CONNECTION_URI = 'mongodb://localhost/memories_project'

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>app.listen(PORT, () => console.log(`succesfull connection to db PORT ${PORT} ....`)))
.catch(err => console.log( err +'\nunable to connect'))
