const Redis = require('ioredis');

const redis = new Redis({
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  db: 1
});

module.exports = redis;