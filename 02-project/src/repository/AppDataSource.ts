import { DataSource } from "typeorm";
import { Product } from "../model/Product";
import { Category } from "../model/Category";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "inventory",
    synchronize: true,
    logging: true,
    entities: [Product, Category]
});


