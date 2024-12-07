const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')

router.post('/', studentController.create)
router.get('/', studentController.getAll)
router.get('/:id', studentController.getOne)

module.exports = router