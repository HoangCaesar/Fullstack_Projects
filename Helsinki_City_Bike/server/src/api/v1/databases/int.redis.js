const Redis = require('ioredis');

// ========================================== REDIS DATABASE ===============================================

// eslint-disable-next-line no-undef
const { REDIS_ENDPOINT, REDIS_PORT, REDIS_PASSWORD } = process.env;
console.log(REDIS_ENDPOINT, REDIS_PORT, REDIS_PASSWORD);

client
    .on('ready', () => console.log('Connected to Redis.'))
    .on('error', (err) => {
        console.error('Redis error', err);
        client.quit();
    });

client.connect().then(() => {
    client.ping().then((response) => console.log(response));
});

module.exports = client;

