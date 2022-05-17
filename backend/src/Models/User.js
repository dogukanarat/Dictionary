import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import joi from 'joi'
import passwordComplexity from 'joi-password-complexity'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdTime: { type: Date, default: Date.now },
});

userSchema.methods.generateAuthToken = async (user) => {
    return jwt.sign({ _id: user._id }, process.env.JWT_KEY, {expiresIn: "1h"});
}

const userModel = mongoose.model("User", userSchema);

const userModelValidate = (payload) => {
    const schema = joi.object({
        email: joi.string().required().label("email"),
        username: joi.string().required().label("username"),
        password: passwordComplexity().required().label("password"),
    });
    return schema.validate(payload)
}

const authValidate = (payload) => {
    const schema = joi.object({
        username: joi.string().required().label("username"),
        password: passwordComplexity().required().label("password"),
    });
    return schema.validate(payload)
}





export { userModel, userModelValidate, authValidate};