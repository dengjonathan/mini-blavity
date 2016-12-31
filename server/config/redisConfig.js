const Promise = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));

const HOST = process.env.REDIS_HOST || '127.0.0.1';
const PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(PORT, HOST);

client.on('connect', () => {
  console.log('connected to local redis instance');
});

module.exports = client;

