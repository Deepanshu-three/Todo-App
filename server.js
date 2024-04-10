import app from "./app.js";
import { connectDB } from "./data/dataBase.js";

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is working at port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})