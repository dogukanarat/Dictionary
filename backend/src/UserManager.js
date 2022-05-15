import Express from 'express'
import { modelPost } from './DatabaseModels.js'
import RedisClient from './RedisClient.js'

const router = Express.Router()

router.post("/login", (req, res, next) => {
    const { username, password } = req.body

    console.log(username, password)

    if(username && password) {

        if (req.session.username == null) {
            req.session.regenerate((err) => {
                if (err) next(err)
    
                // store user information in session, typically a user id
                req.session.username = username
    
                // save the session before redirection to ensure page
                // load does not happen before session is saved
                req.session.save((err) => {
                    if (err) return next(err)
                    res.status(200).json({
                        message: `Login success with ${req.session.username}`,
                        time: new Date()
                    })
                })
            })
    
        } else {
            res.status(200).json({
                message: `Already logon with ${req.session.username}`,
                time: new Date()
            })
        }
    } else {
        res.status(200).json({
            message: `Username or password is empty!`,
            time: new Date()
        })
    }
    


});

router.get("/logout", (req, res, next) => {

    if (!req.session.username) {
        res.status(200).json({
            message: "Not logon yet!",
            time: new Date()
        })
    } else {
        req.session.username = null
        req.session.save(function (err) {
            if (err) next(err)

            // regenerate the session, which is good practice to help
            // guard against forms of session fixation
            req.session.regenerate(function (err) {
                if (err) next(err)
                res.status(200).json({
                    message: "Logout success!",
                    time: new Date()
                })
            })
        })
    }


});

router.post("/register", (req, res, next) => {

});

export default router