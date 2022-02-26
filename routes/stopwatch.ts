import { Router } from 'express';
import { postLaps, getLapsByUser } from '../controllers/stopwatch';

const router = Router();


router.post('/laps', postLaps );
router.get('/:user', getLapsByUser );


export default router;