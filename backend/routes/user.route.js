import express from "express"
import Employee from "../models/exployee.model.js"

const router = express.Router()


//create one employee
router.post('/add',async (req, res) => {
    
    try {
        const employee = new Employee.create(req.body)
        await employee.save()
        res.status(201).send(employee)
    } catch (error) {
        res.status(400).send(error)
    }
})

//view one employee by id
router.get('/employees/view/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send({ message: 'Employee not found' });
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
})




export default router