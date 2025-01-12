import {Router} from 'express';
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} from '../controllers/task.controller';

const router = Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;
