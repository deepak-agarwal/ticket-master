const express = require('express')
const router = express.Router()
const customerController = require('../apps/controller/customerController')
const employeeController = require('../apps/controller/employeeController')
const departmentController = require('../apps/controller/departmentController')
const ticketController = require('../apps/controller/ticketController')


router.get('/customers', customerController.list)
router.get('/customers/:id', customerController.show)
router.post('/customers', customerController.create)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.destroy)

router.get('/employees', employeeController.list)
router.get('/employees/:id', employeeController.show)
router.post('/employees', employeeController.create)
router.put('/employees/:id', employeeController.update)
router.delete('/employees/:id', employeeController.destroy)


router.get('/departments', departmentController.list)
router.get('/departments/:id', departmentController.show)
router.post('/departments', departmentController.create)
router.put('/departments/:id', departmentController.update)
router.delete('/departments/:id', departmentController.destroy)

router.get('/tickets',ticketController.list)
router.post('/tickets',ticketController.create)
router.get('/tickets/:id', ticketController.show)
router.put('/tickets/:id', ticketController.update)
router.delete('/tickets/soft_delete/:id',ticketController.softDestroy)
router.delete('/tickets/:id',ticketController.destroy)



module.exports = router