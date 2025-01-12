import {Request, Response} from 'express';

export const getTasks = (req: Request, res: Response) => {
  res.send('Obtener todas las tareas');
};

export const addTask = (req: Request, res: Response) => {
  res.send('Agregar una tarea');
};

export const updateTask = (req: Request, res: Response) => {
  res.send('Actualizar una tarea');
};

export const deleteTask = (req: Request, res: Response) => {
  res.send('Eliminar una tarea');
};
