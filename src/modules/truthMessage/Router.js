import { Router } from 'express';
import truthMessageCreate from './controllers/truthMessageCreate';
import truthMessageDeleteById from './controllers/truthMessageDeleteById';
import truthMessageGetById from './controllers/truthMessageGetById';

const router = Router();

router.post('/', truthMessageCreate);
router.delete('/:id', truthMessageDeleteById);
router.get('/:id', truthMessageGetById);

export default router;
