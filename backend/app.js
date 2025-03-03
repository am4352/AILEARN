import express from "express";
import cors from "cors"
const PORT = 3000;
const app = express();
app.use(cors())
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" })
    console.log("i am backend");
})

app.listen(PORT,() => {
    console.log(`server started at ${PORT}`)

})

