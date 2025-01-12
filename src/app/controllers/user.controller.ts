import {Request, Response} from 'express';
import {UserService} from '../services/user.service';

const userService = new UserService();

export const getUserByEmail = async (req: Request, res: Response) => {
  /*  const email = req.params.email;
  const users = await userService.getUserByEmail(email);
  res.send(users); */
};

export const createUser = async (req: Request, res: Response) => {
  /*  const user = req.body;
  const userCreated = await userService.createUser(user);
  res.status(200).json(userCreated); */
};
