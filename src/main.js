import express from "express"
import config from "./config/config.js"
import userRouter from "./routers/user.routes.js"
const app=express()

app.use(express.json())

app.use("/api",userRouter)

app.listen(config.PORT,()=>console.log("server is running on port ",config.PORT))