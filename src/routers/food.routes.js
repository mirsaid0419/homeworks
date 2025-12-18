import { Router } from "express";
import food from "../controllers/Food.controller.js";
const router = Router();
router.get("/foods", food.getAllFoods).post("/foods", food.addFood);
export default router;
