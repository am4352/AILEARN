import express from 'express';
import { generateQuiz } from '../api/generateMCQ.js';

const router = express.Router();

router.post('/generateQuiz', generateQuiz);

export default router;














