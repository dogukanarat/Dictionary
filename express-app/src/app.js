const express = require("express");
const bodyParser = require("body-parser");
const { TodoModel } = require("./model");
const Mongoose = require("mongoose");
const cors = require("cors");
const redis = require('redis');

const client = redis.createClient(6379, "redis-server");
const app = express();
const PORT = process.env.PORT || 3000;

client.on("error", error => {
  console.error(error);
});

client.on('connect', function() {
  console.log('Backend connected to Redis server!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  TodoModel.find({})
    .then((todoList) => res.status(200).json(todoList))
    .catch((e) => res.status(500).json(e));
});

app.post("/todo", (req, res) => {
  const todo = new TodoModel({
    ...req.body,
    created_at: new Date(),
  });

  todo
    .save()
    .then((savedTodo) => res.status(200).json(savedTodo))
    .catch((e) => res.status(400).json(e));
});

app.listen(PORT, async () => {
  console.log(`Backend is connecting to MongoDb to ${PORT}  port!`);
  await Mongoose.connect("mongodb://mongodb-server:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Backend connected to MongoDb!");
});