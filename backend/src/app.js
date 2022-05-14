const Express = require("express");
const BodyParser = require("body-parser");
const { PostModel } = require("./model");
const Mongoose = require("mongoose");
const Cors = require("cors");
const Redis = require('redis');

const client = Redis.createClient(6379, "redis");
const app = Express();
const PORT = process.env.PORT || 5000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Cors());

client.on("error", error => {
    console.error(error);
});

client.on('connect', function () {
    console.log('Backend connected to Redis server!');
});

app.get('/', function (req, res) {
    res.send('This is backend server');
});

app.get("/postList", (req, res) => {
    PostModel.find({})
        .then((posts) => res.status(200).json(posts))
        .catch((e) => {
            return res.status(500).json(e);
        });
});

app.get("/listlogin", (req, res) => {
    client.get('login', function (err, reply) {
        console.log(reply);
        res.status(200).send("Successful");
    });
});

app.post("/postNew", (req, res) => {
    const todo = new PostModel({
        ...req.body,
        created_at: new Date(),
    });

    todo
        .save()
        .then((savedTodo) => res.status(200).json(savedTodo))
        .catch((e) => res.status(400).json(e));
});

app.post("/newlogin", (req, res) => {
    client.set('login', 'asdasdasdas', (errr, reply) => {
        console.log(reply);
        res.status(200).send("Successful");
    });

});

app.listen(PORT, async () => {
    console.log("Backend is listening to port {PORT}")
    console.log(`Backend is connecting to MongoDb`);
    await Mongoose.connect("mongodb://mongo:27017/todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Backend connected to MongoDb!");
});