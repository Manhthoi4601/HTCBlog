const Register = require('../models/Register')
const News = require('../models/News')
const Category = require('../models/Category')
const { multipleMongooseToObject } = require('../../util/mongoose')

class siteController {

    // GET /login
    index(req, res, next) {
        var page = req.query.page
        const PAGE_SIZE = 4
        // res.json(page)
        if (page) {
            page = parseInt(page)
            var skip = (page - 1) * PAGE_SIZE
            Promise.all([News.find({}).skip(skip).limit(PAGE_SIZE), Category.find({})])
            
                .then(news => {
                    res.render('home', {
                        news: multipleMongooseToObject(news[0]),
                        category: multipleMongooseToObject(news[1])
                    })
                    // res.json(News)
                })
                .catch(next);
        } else {
            Promise.all([News.find({}), Category.find({})]).then(news => {
                res.render('home', {
                    news: multipleMongooseToObject(news[0]),
                    category: multipleMongooseToObject(news[1])
                })
                // res.json(news)
            })
            .catch(next);
           
        }

    }
    
}


module.exports = new siteController