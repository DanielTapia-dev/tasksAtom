import {Request, Response} from 'express';
import {TaskService} from '../services/task.service';

const taskService = new TaskService();

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();
  res.status(200).send(tasks);
};

export const getActiveTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllActiveTasks();
  res.status(200).send(tasks);
};

export const getTasksByUser = async (req: Request, res: Response) => {
  const email = req.params.email;
  const tasks = await taskService.getTasksByUser(email);
  res.status(200).send(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task = req.body;
  const newTask = await taskService.createTask(task);
  res.status(200).send(newTask);
};

export const updateTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const task = req.body;
  const taskResult = await taskService.updateTask(taskId, task);
  res.status(200).send(taskResult);
};

export const deleteTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const response = await taskService.deleteTask(taskId);
  res.status(200).send(response);
};
