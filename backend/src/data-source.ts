import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pensamento } from "./entity/Pensamento"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Pensamento],
    migrations: [],
    subscribers: [],
})
