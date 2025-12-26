import { Router } from "express";
import {
  addUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/user.controller.js";

const postRouter = Router();
postRouter
  .post("/post", addUser)
  .get("/post/:id", getUserById)
  .get("/post", getAllUsers)
  .put("/post/:id", updateUser)
  .delete("/post/:id", deleteUser);

export default postRouter;
