import { config } from "dotenv";
config()

const env = {
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT:process.env.PORT
};
export default env