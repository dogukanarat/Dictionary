import { modelPost } from './DatabaseModels.js'

const postNew = (req, res, next) => {
    const { title, content } = req.body

    if (req.session.username == null) {
        res.status(200).json({
            message: "Not logon yet!",
            time: new Date()
        })
        return;
    }

    if (!title || !content) {
        res.status(200).json({
            message: "Title or content is empty!",
            time: new Date()
        })
        return;
    }

    console.log(req.session.username)

    const newPost = new modelPost({
        title: title,
        content: content,
        author: req.session.username,
        createdTime: new Date(),
    });

    newPost
        .save()
        .then((savedPost) => {
            res.status(200).json(savedPost)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
};

const postDelete = (req, res, next) => {
    const { _id } = req.body

    modelPost
        .deleteOne({ "_id": _id })
        .catch((err) => {
            return res.status(500).json(err);
        });
};

const postList = (req, res, next) => {
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
};

export { postNew, postDelete, postList }