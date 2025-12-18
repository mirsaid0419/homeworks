import { Router } from "express";
import students from "../controllers/students.controller.js";
const router = Router();

router
  .post("/students", students.addStudent)
  .get("/students", students.getAllStudents)
  .put("/students/:id", students.putStudents)
  .delete("/students/:id", students.deleteStudent);

export default router;
