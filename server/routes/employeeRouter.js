const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')

router.post('/registration', employeeController.registration)
router.post('/login', employeeController.login)
router.get('/auth', employeeController.check)

module.exports = router