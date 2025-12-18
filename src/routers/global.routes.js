import { Router } from "express";
import clientRouter from "../routers/client.routes.js"
import FoodRouter from "../routers/food.routes.js";
const router = Router();
router.use("/client", clientRouter).use("/food", FoodRouter);
// .use("/order",orderRouter)

export default router;
