import { Router } from 'express';
import truthMessageCreate from './controllers/truthMessageCreate';
import truthMessageDeleteById from './controllers/truthMessageDeleteById';
import truthMessageGetAll from './controllers/truthMessageGetAll';
import truthMessageGetById from './controllers/truthMessageGetById';
import truthMessageUpdateById from './controllers/truthMessageUpdateById';

const router = Router();

router.post('/', truthMessageCreate);
router.delete('/:id', truthMessageDeleteById);
router.get('/:id', truthMessageGetById);
router.get('/', truthMessageGetAll);
router.patch('/:id', truthMessageUpdateById);

export default router;
