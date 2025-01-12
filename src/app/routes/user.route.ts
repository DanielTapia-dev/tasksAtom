import {Router} from 'express';
import {getUserByEmail, createUser} from '../controllers/user.controller';

const router = Router();

router.get('/:email', getUserByEmail);
router.post('/', createUser);

export default router;
