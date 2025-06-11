import express from 'express';
import { saveScore, getGraphData } from '../controllers/performanceController.js';
const router = express.Router();

router.post('/save', saveScore);
router.get('/graph/:id', getGraphData);

export default router;
