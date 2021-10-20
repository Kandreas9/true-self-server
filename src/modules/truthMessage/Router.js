import { Router } from 'express';
import truthMessageCreate from './controllers/truthMessageCreate';

const router = Router();

router.post('/', truthMessageCreate);

export default router;
