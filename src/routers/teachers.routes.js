import {Router} from "express"
import teachers from "../controllers/teachers.controller.js"
const router=Router()

router
    .post("/teachers",teachers.addTeacher)
    .get("/teachers",teachers.getAllTeacher)
    .put("/teachers",teachers.putTeacher)
    .delete("/teachers",teachers.deleteTeacher)

export default router