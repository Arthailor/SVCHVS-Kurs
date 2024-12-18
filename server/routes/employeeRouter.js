const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', authMiddleware, employeeController.registration)
router.post('/login', employeeController.login)
router.get('/auth', authMiddleware, employeeController.check)

module.exports = router