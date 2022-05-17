import { Router } from 'express'
import { userModel, authValidate} from '../Models/User.js';
import crypto from 'crypto-js';

const router = Router();

router.post("/", async (req, res, next) => {
    
        const { username, password } = req.body

        const {error} = authValidate(req.body)

        if(error) {
            return res.status(200).json({
                message: error.details[0].message,
                time: new Date()
            })
        }

        const user = await userModel.findOne({username: req.body.username})

        if(!user) {
            return res.status(200).json({
                message: `Username ${req.body.username} is not registered!`,
                time: new Date()
            })
        }

        const isMatch = crypto.SHA256(req.body.password) == user.password

        if(!isMatch) {
            return res.status(200).json({
                message: `Username or password is wrong!`,
                time: new Date()
            })
        }

        const token = await user.generateAuthToken(user);

        try {
        return res.status(400).json({
            data: token,
            message: "Authentication success!",
            time: new Date()
        })

    }
    catch (error) {
        return res.status(400).json({
            message: "Internal error: " + error,
            time: new Date()
        })
    }
});

export default router;