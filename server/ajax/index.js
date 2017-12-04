const express = require('express');
const {knex, Models} = require('trendclear-database');
const router = express.Router();

const redis = require('../tools/redis');

router.post('/login', (req, res, next) => {
  const user = {
    id: req.body.loginId,
    password: req.body.loginPassword
  };

  Models
    .tc_users
    .query()
    .where('email', '=', user.id)
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