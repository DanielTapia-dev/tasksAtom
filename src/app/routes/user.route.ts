import {Router} from 'express';
import {getUserByEmail, createUser} from '../controllers/user.controller';
import {asyncWrapper} from '../../middlewares/async-wrapper';

const router = Router();

router.get('/:email', asyncWrapper(getUserByEmail));
router.post('/', asyncWrapper(createUser));

export default router;
