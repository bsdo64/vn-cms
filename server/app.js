const express = require('express');
const { resolve } = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const Ajax = require('./ajax/index.js');

app.set('view engine', 'hbs');
app.set('views', resolve(__dirname, 'views/'));

const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
  store: new RedisStore({
    db: 1
  }),
  secret: 'keyboard cat',
  name: 'vn-cms',
  cookie: {
    domain: '/',
    maxAge: 60 * 60 * 1000 // 1 hour
  },
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('short'));

// Ajax data
app.use('/ajax', Ajax);

// Rendering
app.get('*', (req, res, next) => {

  console.log(req.session);

  res.render('index.hbs', {
    production: process.env.NODE_ENV === 'production'
  });
});



module.exports = app;