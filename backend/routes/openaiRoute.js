import express from 'express'
import getchatResponse from '../controllers/openai.js';
const router = express.Router();
router.get("/solve", async (req, res) => {
    try {
        await getchatResponse(req, res);
    }
    catch(error) {
        console.error("internal server error", error);
    }
})

export default router;







