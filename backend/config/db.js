import mongoose from "mongoose";
import config from "config";

const connectDb = async() => {
   await mongoose
        .connect(`${config.get("MONGODB_URI")}/ailearn`)// this work on the basic of the environment value , gets value according to that 
        .then(function () {
            console.log("MONGO-DB connected");

        })
        .catch(function (err) {
            console.log(err)
        })
}

export default connectDb






