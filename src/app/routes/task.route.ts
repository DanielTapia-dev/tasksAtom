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
router.post('/', asyncWrapper(createTask));
router.put('/:id', asyncWrapper(updateTask));
router.delete('/:id', asyncWrapper(deleteTask));

export default router;
