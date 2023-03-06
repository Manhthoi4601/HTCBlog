const News = require('../models/News')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
const Category = require('../models/Category');


class MeController{
   

    // [GET]/stored/peoples
    storedNews(req, res, next) {
        Promise.all([News.find({}) , Category.find({})])
        
        .then(news => res.render('me/stored-news',{
            news: multipleMongooseToObject(news[0]),
            category: multipleMongooseToObject(news[1]),
        })
        ).catch(next)
    }
    // [GET]/trash/peoples
    trashNews(req, res, next) {
        Promise.all([News.findDeleted({}), Category.find({})])
        
        .then(news => res.render('me/trash-news',{
            news: multipleMongooseToObject(news[0]),
            category: multipleMongooseToObject(news[1])})
        ).catch(next)
    }

    //category 
    storedCate(req, res, next) {
        Promise.all([News.find({}) , Category.find({})])
        
        .then(news => res.render('me/stored-category',{
            news: multipleMongooseToObject(news[0]),
            category: multipleMongooseToObject(news[1]),
        })
        ).catch(next)
    }
    
}

module.exports = new MeController;
