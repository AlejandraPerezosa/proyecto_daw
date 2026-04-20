import mysql, { ConnectionOptions } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const access: ConnectionOptions = {
  user: process.env.DB_USER ?? 'DB_USER',
  database: process.env.DB_NAME ?? 'DB_NAME',
  host: process.env.DB_HOST ?? 'DB_HOST',
  password: process.env.DB_PASSWORD ?? 'DB_PASSWORD'
};

export const conn = mysql.createConnection(access);

