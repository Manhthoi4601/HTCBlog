const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
const { connect } = require('http2')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')




// connect db
db.connect()

const app = express()
const port = 3001

app.use(express.urlencoded())
app.use(methodOverride('_method'))
app.use(session({
  secret: 'appnews',
  saveUninitialized: true,
  resave: true
}));
app.use((req, res, next) => {
  res.locals.message = req.session.message
  delete req.session.message
  next()
})

app.use(flash());

app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/'));

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})