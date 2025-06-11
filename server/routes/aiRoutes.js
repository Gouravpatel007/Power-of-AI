import express from 'express';
import { generateQuestion, evaluateAnswer } from '../controllers/aiController.js';
const router = express.Router();

router.post('/question', generateQuestion);
router.post('/evaluate', evaluateAnswer);

export default router;
