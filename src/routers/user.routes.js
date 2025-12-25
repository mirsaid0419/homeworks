import { Router } from "express";
import { addUser,updateUser,getAllUsers,getUserById,deleteUser } from "../controllers/user.controller.js";

const userRouter=Router()
userRouter  
    .post("/user",addUser)
    .get("/user/:id",getUserById)
    .get("/user",getAllUsers)
    .put("/user/:id",updateUser)
    .delete("/user/:id",deleteUser)

export default userRouter