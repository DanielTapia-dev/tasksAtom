import {Router} from 'express';
import {
  createTask,
  deleteTask,
  getActiveTasks,
  getTasks,
  getTasksByUser,
  updateTask
} from '../controllers/task.controller';
import {asyncWrapper} from '../../middlewares/async-wrapper';

const router = Router();

router.get('/', asyncWrapper(getTasks));
router.get('/active', asyncWrapper(getActiveTasks));
router.get('/:email', asyncWrapper(getTasksByUser));
router.post('/', asyncWrapper(createTask));
router.put('/:id', asyncWrapper(updateTask));
router.delete('/:id', asyncWrapper(deleteTask));

export default router;
