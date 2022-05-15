import Mongoose from 'mongoose'

const schemaPost = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdTime: Date,
});

const schemaUser = new Mongoose.Schema({
    username: String,
    password: String,
    createdTime: Date,
});

const modelPost = Mongoose.model("Post", schemaPost);
const modelUser = Mongoose.model("User", schemaUser);

export { modelPost, modelUser}