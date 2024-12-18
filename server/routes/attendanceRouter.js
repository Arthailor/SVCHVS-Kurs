const Router = require('express')
const router = new Router()
const attendanceController = require('../controllers/attendanceController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, attendanceController.create)
router.delete('/:attendance_id', authMiddleware, attendanceController.delete)
router.get('/', attendanceController.getAll)

module.exports = router