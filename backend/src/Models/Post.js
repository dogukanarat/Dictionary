import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import joi from 'joi'

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdTime: { type: Date, default: Date.now }
});

const postModel = mongoose.model("Post", postSchema);

const postModelValidate = (payload) => {
    const schema = joi.object({
        title: joi.string().required().label("title"),
        content: joi.string().required().label("content"),
        author: passwordComplexity().required().label("author"),
    });
    return schema.validate(payload)
}


export { postSchema, postModel, postModelValidate };