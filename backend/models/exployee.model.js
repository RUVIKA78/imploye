import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({

    fullName: {
        type: String, 
        required:true,
    }, 
    email: {
        type: String, 
        required:true,
    },
    post: {
        type: String, 
        required:true,
    },
    department: {
        type: String, 
        required:true,
    }, 
    phoneNum: {
        type: String, 
        required:true,
    }, 
   
    salary: {
        type: String, 
        required:true,
    }, 
    yearOfJoining: {
        type: String, 
        required:true,
    },
    yearOfLeaving: {
        type: String, 
    },
    role: {
        type: String, 
        default: "Employee", 
    },
    profileImage: {
        type: String, 
        required:true
    }


},
    {
    timestamps:true,
    })
const Employee =  mongoose.model("Employee", employeeSchema)

export default Employee