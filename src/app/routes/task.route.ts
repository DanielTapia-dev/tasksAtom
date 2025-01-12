import {Router} from 'express';
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask
} from '../controllers/task.controller';
import {asyncWrapper} from '../../middlewares/async-wrapper';

const router = Router();

router.get('/', asyncWrapper(getTasks));
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
