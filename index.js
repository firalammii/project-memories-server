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
    res.send("This a memories project API");
})

app.use('/posts', routerPosts)

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`connected to cloud db, server on localhost ${PORT} ....`)))
    .catch(err => console.log(err + '\nunable to connect'))


// mongoose.connect(process.env.DB_CONNECTION_URI_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`connected to local db, server on localhost ${PORT}`)))
// .catch(err => console.log( err +'\nunable to connect'))
