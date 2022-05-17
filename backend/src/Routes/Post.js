import { Router } from 'express'
import { postModel, postModelValidate } from '../Models/Post.js';

const router = Router();

router.post("/new", async (req, res, next) => {
    try
    {
        const { title, content } = req.body

        if (req.session.username == null) {
            return res.status(200).json({
                message: "Not logon yet!",
                time: new Date()
            })
            
        }
    
        if (!title || !content) {
            return res.status(200).json({
                message: "Title or content is empty!",
                time: new Date()
            })
        }
    
        const newPost = new modelPost({
            title: title,
            content: content,
            author: req.session.username,
            createdTime: new Date(),
        });
    
        newPost
            .save()
            .then((savedPost) => {
                return res.status(200).json(savedPost)
            })
            .catch((err) => {
                return res.status(400).json(err)
            });
    }
    catch(error)
    {
        return res.status(200).json({
            message: "Internal error!",
            time: new Date()
        })
    }
    
});

router.post("/delete", async (req, res, next) => {
    const { _id } = req.body

    modelPost
        .deleteOne({ "_id": _id })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

router.get("list", async (req, res, next) => {
    const { start, offset } = req.query

    var actualStart = 0
    var actualOffset = 0

    if (start != null) actualStart = start
    if (offset != null) actualOffset = offset

    modelPost.find({})
        .skip(start)
        .limit(offset)
        .then((posts) => res.status(200).json(posts))
        .catch((err) => {
            return res.status(500).json(err);
        });
});

export default router