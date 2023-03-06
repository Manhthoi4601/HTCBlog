const Register = require("../models/Register")
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
const Category = require('../models/Category')


class RegisterController{

    create(req,res,next){
        res.render('registers/register')
        
    }

    // [POST]
    store(req,res,next){
        // res.json(req.body)
        // console.log(req.body)
        const register = new Register(req.body)
        register.save()
        // res.send('save')
        .then(() => {
            res.redirect('/login')})
            .catch(error =>{
                req.flash('message','Tài khoản đã tồn tại !')
                res.redirect('/register')
                // console.log(req.flash());
            })
            res.status(201);
    }ds
    
    // GET /login
    index(req,res,next){
        // res.render('registers/register', { message: req.flash('message') })
        Category.find({})
            .then(category => {
                console.log('a');
                res.render('registers/register', { category: multipleMongooseToObject(category),message: req.flash('message') })
            })
            .catch(next)
    }

    show(req,res,next){
        Register.findOne({slug: req.params.slug})
        .then(register=>{
            
            res.json(register)
        })
        .catch(next)
    }
    // create
    
}


module.exports = new RegisterController