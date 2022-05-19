import { Router } from 'express'
import { postModel, postModelValidate } from '../Models/Post.js';
import jwt from 'jsonwebtoken'

const router = Router();

router.post("/new", async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                message: "Unauthorized",
                time: new Date()
            })
        }

        const decoded = await jwt.verify(
            req.headers.authorization,
            process.env.JWT_KEY,
            (error, decoded) => {
                if (error) {
                    return res.status(403).json({
                        message: "Unauthorized: " + error,
                        decoded: decoded,
                        time: new Date()
                    })
                } else {
                    const { title, content } = req.body

                    const author = decoded.username

                    if (!title || !content) {
                        return res.status(400).json({
                            message: "Invalid input!",
                            time: new Date()
                        })
                    }

                    const { error } = postModelValidate({
                        title: title,
                        content: content,
                        author: author
                    })

                    if (error) {
                        return res.status(400).json({
                            message: error.details[0].message,
                            time: new Date()
                        })
                    }

                    const newPost = new postModel({
                        title: title,
                        content: content,
                        author: author,
                        createdTime: new Date()
                    })
                        .save()
                        .then((savedPost) => {
                            return res.status(200).json(savedPost)
                        })
                        .catch((error) => {
                            return res.status(400).json(error)
                        });
                }
            })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal error: " + error,
            time: new Date()
        })
    }

});

router.post("/delete", async (req, res, next) => {
    const { _id } = req.body

    postModel
        .deleteOne({ "_id": _id })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

router.get("/list", async (req, res, next) => {
    const { start, offset } = req.query

    var actualStart = 0
    var actualOffset = 0

    if (start != null) actualStart = start
    if (offset != null) actualOffset = offset

    postModel.find({})
        .skip(start)
        .limit(offset)
        .then((payload) => { 
            res.status(200).json(payload)
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
});

export default router