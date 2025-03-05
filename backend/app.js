import express from "express";
import cors from "cors";
import  configDotenv  from "dotenv";
import connectDb from "./config/db.js"
import openaiRoute from "./routes/openaiRoute.js";
import path from "path"
configDotenv.config();
const PORT = 3000;
const app = express();
connectDb();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" })
})
app.use("/api" , openaiRoute)


app.listen(PORT,() => {
    console.log(`server started at ${PORT}`)

})

