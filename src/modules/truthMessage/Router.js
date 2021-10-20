import { Router } from 'express';
import truthMessageCreate from './controllers/truthMessageCreate';
import truthMessageDeleteById from './controllers/truthMessageDeleteById';

const router = Router();

router.post('/', truthMessageCreate);
router.delete('/:id', truthMessageDeleteById);

export default router;
