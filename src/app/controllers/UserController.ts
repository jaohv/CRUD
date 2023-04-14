import { Request, Response, Router} from 'express';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUser';

const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
     const users = await UserRepository.getUsers();
     return res.status(200).json(users);
})

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
     const data = req.body;
     const UserCreated = await UserRepository.createUser(data);
     return res.status(201).send(UserCreated);
});

userRouter.delete('/', async (req: Request, res: Response): Promise<Response> => {
     const data = req.body;
     const UserDeleted = await UserRepository.deleteUser(data.id);
     return res.status(200).send(UserDeleted);
});

export default userRouter;