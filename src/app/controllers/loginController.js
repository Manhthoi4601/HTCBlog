const Register = require("../models/Register")
const Category = require('../models/Category')

const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
const storage = require('node-sessionstorage')
const flash = require('connect-flash')


class LoginController{


    // GET /login
    index(req,res,next){
        // res.render('registers/login', { message: req.flash('message') })
        Category.find({})
            .then(category => {
                console.log('a');
                res.render('registers/login', { category: multipleMongooseToObject(category),message: req.flash('message') })
            })
            .catch(next)
    }


    // POST /login
    async check(req,res,next){
        // res.json('login success')
        try {
            const email=req.body.email;
            const password=req.body.password;
    
            const userEmail=await Register.findOne({email:email});
            if(userEmail.confirmpassword===password){
                // res.status(201).send("LOGIN Successful");
                // res.cookie('registers', Register.userId)
                storage.setItem('USER_LOGIN', userEmail._id)
                res.redirect('/me/stored/news')
            }
            else{
                req.flash('message','Mật khẩu không đúng !')
                res.redirect('/login')
            }
    
        } catch (error) {
            req.flash('message','Tài khoản không tồn tại !')
            res.redirect('/login')
        }
    }
    
}


module.exports = new LoginController