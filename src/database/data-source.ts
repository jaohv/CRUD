import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1681482963732 } from './migrations/1681482963732-CreateUsersTable'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateUsersTable1681482963732],
    subscribers: [],
})
