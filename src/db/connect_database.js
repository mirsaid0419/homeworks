import { Pool } from "pg";
import config from "../config/config.js";

async function connect_db() {
  try {
    const pool = new Pool({
      // bu yerda online data bazaga ulash kodlari
      connectionString:config.DB_URI,
      ssl: {
        rejectUnauthorized: false,
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      // bu yerda esa lokal data bazaga ulash kodlari
      // port: config.DB_PORT,
      // host: config.DB_HOST,
      // database: config.DB_DATABASE,
      // user: config.DB_USER,
      // password: config.DB_PASSWORD,
    });
    await pool.query("select 1");
    return pool;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
export default connect_db;
