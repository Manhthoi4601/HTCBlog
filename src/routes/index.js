const loginRouter = require('./login')
const siteRouter = require('./site')
const registerRouter = require('./register')
const newsRouter = require('./news')
const meRouter = require('./me')
const categoryRouter = require('./category')


function route(app) {
    app.use('/category', categoryRouter)
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)

}


module.exports = route