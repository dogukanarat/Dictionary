import { modelUser } from './DatabaseModels.js'
import redisClient from './RedisClient.js'

const userLogin = (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(200).json({
            message: `Username or password is empty!`,
            time: new Date()
        })
        return;
    }

    if (req.session.username != null) {
        res.status(200).json({
            message: `Already logon with ${req.session.username}`,
            time: new Date()
        })
        return;
    }

    modelUser
        .findOne({ username: username, password: password })
        .then((result) => {
            if (result == null) {
                res.status(200).json({
                    message: `Username or password is wrong!`,
                    time: new Date()
                });
                return;
            }
        })
        .catch((err) => {
            res.status(500).json(err)
            return
        });

    req.session.regenerate((err) => {
        if (err) next(err)

        req.session.username = username
        

        req.session.save((err) => {
            if (err) return next(err)
            res.status(200).json({
                message: `Login success with ${req.session.username}`,
                time: new Date()
            })
        })
    })

};

const userLogout = (req, res, next) => {

    if (!req.session.username) {
        res.status(200).json({
            message: "Not logon yet!",
            time: new Date()
        })
        return;
    }

    req.session.username = null
    req.session.save(function (err) {
        if (err) next(err)

        req.session.regenerate(function (err) {
            if (err) next(err)
            res.status(200).json({
                message: "Logout success!",
                time: new Date()
            })
        })
    })

};

const userRegister = (req, res, next) => {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(200).json({
            message: `Username or password is empty!`,
            time: new Date()
        })
        return;
    }

    if (req.session.username != null) {
        res.status(200).json({
            message: `Already logon with ${req.session.username}`,
            time: new Date()
        })
        return;
    }

    modelUser
        .findOne({ username: username })
        .then((result) => {

            if (result != null) {
                res.status(200).json({
                    message: `Username ${username} already exists!`,
                    time: new Date()
                });
                return
            }

            const newUser = new modelUser({
                username: username,
                password: password,
                createdTime: new Date(),
            });
        
            newUser
                .save()
                .then((savedUser) => {
                    res.status(200).json({
                        message: `Register success with ${savedUser.username}`,
                        time: new Date()
                    })
                    return;
                })
                .catch((err) => {
                    res.status(400).json(err)
                    return;
                });


        })
        .catch((err) => {
            res.status(500).json(err)
            return;
        });

};

export { userLogin, userLogout, userRegister }