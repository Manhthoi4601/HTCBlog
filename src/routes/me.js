const express = require('express')
const router = express.Router()

const MeController = require('../app/controllers/MeController')

const auth = require('../middlewares/auth')


// newsController.index


router.get('/stored/news',auth.checkAuthentication(),MeController.storedNews)
router.get('/trash/news',auth.checkAuthentication(),MeController.trashNews)
router.get('/stored/categories',auth.checkAuthentication(),MeController.storedCate)


module.exports = router