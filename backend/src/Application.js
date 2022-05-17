import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import redisConnect from 'connect-redis'
import dotenv from 'dotenv'

import redisClient from './Redis.js'

import databaseConnect from './Database.js'
import authRouter from './Routes/Auth.js'
import postRouter from './Routes/Post.js'
import userRouter from './Routes/User.js'

const listenPort = process.env.PORT || 5000;
const expressApp = express()
const redisStore = redisConnect(session);

dotenv.config()

// @note database connection

databaseConnect();

// @note middleware

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(cors());
expressApp.use(cookieParser());

// expressApp.use(session({
//     // store: new redisStore({ client: redisClient }),
//     secret: "secretkey",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         httpOnly: false,
//         maxAge: 1000 * 60 * 10
//     }
// }));

expressApp.get('/', async (req, res) => {
    return res.send({
        "message": `Hello from backend server.`,
        "time": new Date().toLocaleString()
    });
});

expressApp.use("/post", postRouter);
expressApp.use("/user", userRouter);
expressApp.use("/auth", authRouter);

expressApp.listen(listenPort, async () => {
    console.log(`Backend is listening to port ${listenPort}`)
});