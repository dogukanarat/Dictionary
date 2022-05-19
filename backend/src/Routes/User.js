import { Router } from 'express'
import { userModel, userModelValidate } from '../Models/User.js';
import crypto from 'crypto-js';

const router = Router();

router.post("/register", async (req, res, next) => {
    try {
        const { email, username, password } = req.body

        const { error } = userModelValidate({
            email: email,
            username: username,
            password: password
        })

        if (error) {
            return res.status(200).json({
                message: error.details[0].message,
                time: new Date()
            })
        }

        const user = await userModel.findOne({ email: email })

        if (user) {
            return res.status(200).json({
                message: `Email ${email} is already registered!`,
                time: new Date()
            })
        }

        const hashPassword = crypto.SHA256(password);

        const newUser = await new userModel({
            email: email,
            username: username,
            password: hashPassword,
            createdTime: new Date(),
        });

        newUser
            .save()
            .then((savedUser) => {
                return res.status(200).json({
                    message: `Register success for ${savedUser.email}`,
                    time: new Date()
                })
            })
            .catch((error) => {
                return res.status(400).json(error)
            });
    }
    catch (error) {
        return res.status(400).json({
            message: "Internal error: " + error,
            time: new Date()
        })
    }

});

export default router