const express = require('express');
const { resolve } = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', resolve(__dirname, 'views/'));

app.get('/', (req, res, next) => {
  res.render('index.hbs', {
    production: process.env.NODE_ENV === 'production'
  });
});

module.exports = app;