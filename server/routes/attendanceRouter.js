const Router = require('express')
const router = new Router()
const attendanceController = require('../controllers/attendanceController')

router.post('/', attendanceController.create)
router.get('/', attendanceController.getAll)

module.exports = router