import express from "express";
import { connectDb } from "./src/db/database.connect.js";
import config from "./src/config/config.js";
import router from "./src/routers/global.routes.js";

const app = express();
app.use(express.json());
await connectDb();

app.use("/look", router);

app.listen(config.PORT, () => console.log("server running..."));
