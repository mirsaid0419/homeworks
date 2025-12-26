import express from "express"
import config from "./config/config.js"
import router from "./routers/global.routes.js"
const app=express()

app.use(express.json())

app.use("/api",router)

app.listen(config.PORT,()=>console.log("server is running on port ",config.PORT))