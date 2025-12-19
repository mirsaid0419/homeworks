import { Router } from "express";
import orderRouter from "../controllers/Order.controller.js";
const router = Router();
router
  .get("/orders/:id", orderRouter.getOrderById)
  .post("/orders", orderRouter.addOrder)
  .delete("/orders/:id", orderRouter.orderDeleteById);
export default router;
