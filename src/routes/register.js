const express = require('express')
const router = express.Router()

const registerController = require('../app/controllers/registerController')

router.get('/create', registerController.create)
router.post('/store', registerController.store)
router.use('/:slug', registerController.show)
router.get('/', registerController.index)


module.exports = router