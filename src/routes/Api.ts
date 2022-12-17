import { Request, Response, Router } from 'express';
import Gear from '../controllers/API/gear';

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('Hello world'));

router.get('/gears', Gear.getGearLists);

export default router;
