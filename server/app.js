const express = require('express');
const { resolve } = require('path');
const morgan = require('morgan');

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
  name: 'vn-cms'
}));

app.use(morgan('short'));

// Ajax data
app.use('/ajax', Ajax);

// Rendering
app.get('*', (req, res, next) => {
  console.log(req.session);
  console.log(req.headers);

  res.render('index.hbs', {
    production: process.env.NODE_ENV === 'production'
  });
});



module.exports = app;