import { Sequelize } from 'sequelize-typescript';
import { Tableusers } from '../models/tableUsers';
import env from 'dotenv'
env.config()

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Tableusers] // Añade todos tus modelos aquí
});
export default sequelize