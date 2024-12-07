const Router = require('express')
const router = new Router()

const employeeRouter = require('./employeeRouter')
const classRouter = require('./classRouter')
const studentRouter = require('./studentRouter')
const tripRouter = require('./tripRouter')
const excursionRouter = require('./excursionRouter')
const attendanceRouter = require('./attendanceRouter')
const eventRouter = require('./eventRouter')
const participantRouter = require('./participantRouter')

router.use('/employee', employeeRouter)
router.use('/class', classRouter)
router.use('/student', studentRouter)
router.use('/trip', tripRouter)
router.use('/excursion', excursionRouter)
router.use('/attendance', attendanceRouter)
router.use('/event', eventRouter)
router.use('/participant', participantRouter)

module.exports = router