import { Router } from 'express';
import { postLaps, getLapsByName } from '../controllers/stopwatch';


const router = Router();


router.post('/', postLaps);
router.get('/:name', getLapsByName);


export default router;