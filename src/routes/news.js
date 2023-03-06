const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/newsController')
const { uploadImage, upload } = require('../middlewares/upload-image')

const auth = require('../middlewares/auth')


// newsController.index
router.get('/search',newsController.search)
router.post('/:id/update',auth.checkAuthentication(),upload.single('avatar') ,newsController.update)

router.get('/create', auth.checkAuthentication(), newsController.create)
router.get('/category/:id',newsController.getByCategory)


router.post('/store',auth.checkAuthentication(),newsController.store)
router.get('/:id/edit',auth.checkAuthentication(),newsController.edit)
router.delete('/:id',auth.checkAuthentication(),newsController.remove)
router.delete('/:id/force',auth.checkAuthentication(),newsController.forceRemove)
router.post('/article/:id' , upload.single('avatar'),  auth.checkAuthentication(),newsController.PostArticle)
// router.put('/article/edit/:id' , upload.single('avatar'),  newsController.PUTArticle)

router.patch('/:id/restore',auth.checkAuthentication(),newsController.restore)
router.get('/:slug',newsController.show)



module.exports = router