const Redis = require('ioredis');

// ========================================== REDIS DATABASE ===============================================

// eslint-disable-next-line no-undef
const { REDIS_ENDPOINT, REDIS_PORT, REDIS_PASSWORD } = process.env;
const client = new Redis({
    host: REDIS_ENDPOINT,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
});

client
    .on('ready', () => console.log('Connected to Redis.'))
    .on('error', (err) => {
        console.error('Redis error', err);
        client.quit();
    });

module.exports = client;
