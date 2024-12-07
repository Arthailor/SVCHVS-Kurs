const Router = require('express')
const router = new Router()
const participantController = require('../controllers/participantController')

router.post('/', participantController.create)
router.get('/', participantController.getAll)

module.exports = router