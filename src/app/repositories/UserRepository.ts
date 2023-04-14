import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find()
}

const createUser = async (user: IUser): Promise<User> => {
    const newUser = await userRepository.create(user);
    await userRepository.save(newUser);
    return newUser;
}

const deleteUser = async (id: number): Promise<void> => { 
    await userRepository.delete(id);
    return;
}

export default { getUsers, createUser, deleteUser };