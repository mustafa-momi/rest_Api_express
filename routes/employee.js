import express, { json, response } from "express";
import {
    paginatedResult,
} from "../controllers/users.js";
import {getEmployees} from '../controllers/employee.js'
import employees from '../model/Employee.js'
const router = express.Router();

//getsd all the employees.
router.get('/',getEmployees)

//pagination
router.get('/:a', paginatedResult(employees), (req, res) => {
    res.json(res.paginatedResult)
})

router.get('/', (req, res) => {
    console.log("in search")
    // const searchQuery = req.query.searchquery;

    // if (searchQuery != null) {

    // } else {
    //     res.end()
    // }

    // let data = employees.search(req.params.key)

    // res.send(employees)

})

export default router;