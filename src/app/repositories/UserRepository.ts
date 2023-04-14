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

const updateUser = async (user: IUser): Promise<User> => {
    const updateUser = await userRepository.save(user);
    await userRepository.save(updateUser);
    return updateUser;
}

const findOne = async (id: number): Promise<User | null> => {
    const user = await userRepository.findOne({ where: { id } });
    return user || null;
}

export default { getUsers, createUser, deleteUser, updateUser, findOne };