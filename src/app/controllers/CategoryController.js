const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
const Category = require('../models/Category')


class CategoryController{


    create(req, res, next){
        // res.render('categories/createCate')
        Category.find({})
            .then(category => {
                console.log('a');
                res.render('categories/createCate', { category: multipleMongooseToObject(category) })
            })
            .catch(next)
    }

    store(req,res,next){
        console.log(req.body)
        const category = new Category(req.body)
        category.save()
        .then(() => {
            res.redirect('home')
        })
        .catch(error =>{
            res.send('fail')
        })
        res.status(201);
    }

    index(req, res, next) {
        Category.find({})
            .then(category => {
                res.render('news/create', { category: multipleMongooseToObject(category) })
            })
            .catch(next)
        
    }
    
}


module.exports = new CategoryController;
