const Router = require('express')
const router = new Router()
const tripController = require('../controllers/tripController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, tripController.create)
router.delete('/:trip_id', authMiddleware, tripController.delete)
router.get('/', tripController.getAll)
router.get('/:trip_id', tripController.getOne)

module.exports = router