const express = require('express')
const router = express.Router()

const categoryController = require('../app/controllers/CategoryController')
const { uploadImage, upload } = require('../middlewares/upload-image')

const auth = require('../middlewares/auth')


// newsController.index
router.post('/store',categoryController.store)
router.get('/create',categoryController.create)

// router.use('/news/create',categoryController.index)




module.exports = router