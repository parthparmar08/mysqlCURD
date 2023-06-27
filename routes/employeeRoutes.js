const employees = require("../controller/employeeController");
const router = require("express").Router();

// Create a new employee
router.post("/employees", employees.create);

// Retrieve all employees
router.get("/employees", employees.findAll);

// Retrieve a single employee with employeeId
router.get("/employees/:employeeId", employees.findOne);

// Update a employee with employeeId
router.put("/employees/:employeeId", employees.update);

// Delete a employee with employeeId
router.delete("/employees/:employeeId", employees.delete);

// Create a new employee
router.delete("/employees", employees.deleteAll);

module.exports = router;
