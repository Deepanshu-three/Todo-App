import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import  { config }  from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middleware/error.js";
import cors from "cors"

const app = express();

config({
    path: "./data/config.env"
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use("/api/v1/user",userRouter)
app.use("/api/v1/task", taskRouter)


app.use(errorMiddleWare)



export default app
