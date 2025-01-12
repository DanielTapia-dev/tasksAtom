import {Request, Response} from 'express';
import {UserService} from '../services/user.service';

const userService = new UserService();

export const getUserByEmail = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.send(users);
};

export const addUser = async (req: Request, res: Response) => {
  const user = req.body;
  const userCreated = await userService.createUser(user);
  res.send(userCreated);
};
