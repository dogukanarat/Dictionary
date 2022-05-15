import Express from 'express'
import Mongoose from 'mongoose'
import Cors from 'cors'
import CookieParser from 'cookie-parser'
import { createClient } from 'redis'

import { modelPost } from './DatabaseModels.js'
import { userLogin, userLogout, userRegister,} from './UserManager.js'
import { postList, postDelete, postNew} from './PostManager.js'

import session from 'express-session'
import redisConnect from 'connect-redis'

const listenPort = process.env.PORT || 5000;

const expressApp = Express();
let redisClient = createClient({ legacyMode: true , url:"redis://redis:6379"});
const redisStore = redisConnect(session);

redisClient.on("error", (error) => {
    console.error(error);
});

redisClient.on('connect', () => {
    console.log('Backend connected to Redis server!');
});

redisClient.connect().catch((error) => {
    console.error(error);
});

expressApp.use(Express.json());
expressApp.use(Express.urlencoded({ extended: true }));
expressApp.use(Cors());
expressApp.use(CookieParser());
expressApp.use(session({
    store: new redisStore({ client: redisClient }),
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}));

expressApp.use( (req, res, next) => {

    if (!req.session.views) {
        req.session.views = 0
    }

    req.session.views = (req.session.views || 0) + 1
    next()
})

expressApp.get('/', function (req, res) {
    const message = {
        "message": `Hello from backend server. View count: ${req.session.views}`,
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