import { DataSource } from "typeorm";
import { Product } from "../model/Product";
import { Category } from "../model/Category";

/*
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "catolica",
    database: "inventory",
    synchronize: true,
    logging: true,
    entities: [Category, Product],
});
*/

/*
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "catolica",
    database: "inventory",
    synchronize: true,
    logging: true,
    entities: [Category, Product],
    ssl: {}
});

*/

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [Category, Product],
});