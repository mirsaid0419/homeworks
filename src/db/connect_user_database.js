import { Pool } from "pg";
import config from "../config/config.js";

async function connect_db() {
  try {
    const pool = new Pool({
        port: config.DB_PORT,
        host: config.DB_HOST,
        database: config.DB_DATABASE,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
    });
    await pool.query("select 1");
    return pool;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
export default connect_db;
