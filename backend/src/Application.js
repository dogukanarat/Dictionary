import Express from 'express'
import Mongoose from 'mongoose'
import Cors from 'cors'
import Session from 'express-session'
import CookieParser from 'cookie-parser'

import { modelPost } from './DatabaseModels.js'
import { userLogin, userLogout, userRegister,} from './UserManager.js'
import { postList, postDelete, postNew} from './PostManager.js'
import RedisClient from './RedisClient.js'

const expressApp = Express();
const listenPort = process.env.PORT || 5000;

expressApp.use(Express.json());
expressApp.use(Express.urlencoded({ extended: true }));
expressApp.use(Cors());
expressApp.use(CookieParser());
expressApp.use(Session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}));

RedisClient.on("error", (error) => {
    console.error(error);
});

RedisClient.on('connect', () => {
    console.log('Backend connected to Redis server!');
});

expressApp.get('/', function (req, res) {
    const message = {
        "message": "Hello from backend server",
        "time": new Date().toLocaleString()
    }

    res.send(message);
});

expressApp.post("/post/new", postNew)
expressApp.post("/post/delete", postDelete)
expressApp.get("/post/list", postList)
expressApp.post("/user/login", userLogin)
expressApp.get("/user/logout", userLogout)
expressApp.post("/user/register", userRegister)

expressApp.listen(listenPort, async () => {
    console.log(`Backend is listening to port ${listenPort}`)
    console.log(`Backend is connecting to MongoDB`);

    await Mongoose.connect("mongodb://mongo:27017/Dictionary", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Backend connected to MongoDB!");
});