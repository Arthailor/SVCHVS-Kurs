const Router = require('express')
const router = new Router()
const tripController = require('../controllers/tripController')

router.post('/', tripController.create)
router.get('/', tripController.getAll)
router.get('/:id', tripController.getOne)

module.exports = router