const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/loginController')
// loginController.index

// router.use('/:slug', loginController.show)
router.post('/log', loginController.check)
router.use('/', loginController.index)


module.exports = router