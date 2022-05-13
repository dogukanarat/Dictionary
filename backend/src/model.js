const Mongoose = require("mongoose");

const postSchema = new Mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  created_at: Date,
});

module.exports = {
  PostModel: Mongoose.model("todo", postSchema),
};