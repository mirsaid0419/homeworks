import { Router } from "express";
import userRouter from "./user.routes.js";

const router=Router()
router
    .use("/users",userRouter)
    .use("/posts",postsRouter)