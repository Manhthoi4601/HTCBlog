const { redirect } = require("express/lib/response")
const storage = require('node-sessionstorage')
const Register = require("../app/models/Register")
const flash = require('connect-flash')

const checkAuthentication = () => {
    return async (req, res, next) => {
        const check = storage.getItem("USER_LOGIN") ;
        if(check){
            console.log(check)
            next()
        }else {
            res.redirect('/login')
        }
    }
}
module.exports = {
    checkAuthentication
}