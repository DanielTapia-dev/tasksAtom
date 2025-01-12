import {Router} from 'express';
import {getUserByEmail, addUser} from '../controllers/user.controller';

const router = Router();

router.get('/:email', getUserByEmail);
router.post('/', addUser);

export default router;
