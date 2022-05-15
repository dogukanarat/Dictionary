import Express from 'express'
import Mongoose from 'mongoose'
import Cors from 'cors'
import Session from 'express-session'
import CookieParser from 'cookie-parser'

import { modelPost } from './DatabaseModels.js'
import RouteUserManager from './UserManager.js'
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

expressApp.get("/posts", (req, res) => {
    modelPost.find({})
        .then((posts) => res.status(200).json(posts))
        .catch((e) => {
            return res.status(500).json(e);
        });
});

expressApp.get("/listlogin", (req, res) => {
    redisClient.get('login', function (err, reply) {
        console.log(reply);
        res.status(200).send("Successful");
    });
});

expressApp.post("/new/post", (req, res) => {
    const todo = new modelPost({
        ...req.body,
        created_at: new Date(),
    });

    todo
        .save()
        .then((savedTodo) => res.status(200).json(savedTodo))
        .catch((e) => res.status(400).json(e));
});

expressApp.use("/user", RouteUserManager)

expressApp.listen(listenPort, async () => {
    console.log(`Backend is listening to port ${listenPort}`)
    console.log(`Backend is connecting to MongoDb`);

    await Mongoose.connect("mongodb://mongo:27017/todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Backend connected to MongoDb!");
});