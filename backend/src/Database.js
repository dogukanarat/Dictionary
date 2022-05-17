import mongoose from 'mongoose'

const connect = () => {
    try {
        mongoose.connect("mongodb://mongo:27017/Dictionary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }


}

export default connect