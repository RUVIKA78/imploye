import express from "express"
import connectMongoDB from "./database.js"
import userRouter from "./routes/user.route.js"
import bodyParser from "body-parser"

const PORT = 3000
const app = express()

connectMongoDB()

app.use(express.json())

app.use('/', userRouter)

app.listen(PORT, () => {
    console.log("Server is running");
})