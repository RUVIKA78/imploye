import mongoose from "mongoose"

const connectMongoDB = () => {
    return mongoose.connect("mongodb://localhost:27017/employeedb")
        .then(() => {
            console.log("mongodb connected")
        })
        .catch((err) => console.log("mongodb error occured", err))
}
export default connectMongoDB

