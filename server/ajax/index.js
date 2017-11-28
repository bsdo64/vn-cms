const express = require('express');
const {knex, Models} = require('trendclear-database');
const router = express.Router();

const redis = require('../tools/redis');

router.post('/login', (req, res, next) => {
  Models
    .tc_users
    .query()
    .where('email', '=', req.body.inputEmail)
    .eager('password')
    .first()
    .then((r) => {

      if (r) {
        console.log(r);
      }


      res.json(r);
    })
});

router.get('/', (req, res, next) => {
  knex
      .select('tablename')
      .from('pg_catalog.pg_tables')
      .where('schemaname', '=', 'public')
      .then(r => {
        res.json(r);
      })
});

module.exports = router;