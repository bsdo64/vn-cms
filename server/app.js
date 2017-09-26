const express = require('express');
const { resolve } = require('path');
const morgan = require('morgan');

const app = express();

const Ajax = require('./ajax/index.js');

app.set('view engine', 'hbs');
app.set('views', resolve(__dirname, 'views/'));

app.use(morgan('short'));

// Ajax data
app.use('/ajax', Ajax);

// Rendering
app.get('*', (req, res, next) => {
  res.render('index.hbs', {
    production: process.env.NODE_ENV === 'production'
  });
});



module.exports = app;