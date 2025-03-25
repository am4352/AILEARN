import express from "express";
const app = express();
app.use(express.json());
import cors from "cors";
app.use(cors());
import  configDotenv  from "dotenv";
import connectDb from "./config/db.js"
import openaiRoute  from "./routes/openaiRoute.js";
import path from "path"
// import Quiz from "../frontend/src/components/Quiz.jsx";
configDotenv.config();
const PORT = 3000;

connectDb();

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" })
})
app.use("/api", openaiRoute)
// app.use("/api/generateQuiz" , quiz)


app.listen(PORT,() => {
    console.log(`server started at ${PORT}`)

})

