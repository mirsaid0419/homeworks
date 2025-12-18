import express from "express"
import teacherRouter from "./src/routers/teachers.routes.js"
import studentRouter from "./src/routers/student.routes.js"
const app=express()
app.use(express.json())

app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)

app.listen(3000,()=>console.log("server running..."))