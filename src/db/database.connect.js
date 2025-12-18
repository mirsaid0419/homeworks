import { connect } from "mongoose";
import config from "../config/config.js";

export async function connectDb() {
  try {
    await connect(config.URI);
    console.log("data base connected");
  } catch (error) {
    console.log("error on data base connecting", error.message);
    process.exit(1);
  }
}
