import { Router } from 'express';
import baseCreate from './controllers/createBase';

const router = Router();

router.post('/', baseCreate);

export default router;
