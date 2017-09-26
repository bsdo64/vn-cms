const express = require('express');
const {knex, Models} = require('trendclear-database');
const router = express.Router();

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