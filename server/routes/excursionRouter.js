const Router = require('express')
const router = new Router()
const excursionController = require('../controllers/excursionController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, excursionController.create)
router.delete('/:excursion_id', excursionController.delete)
router.get('/', excursionController.getAll)

module.exports = router