const redis = require('redis');

// ========================================== REDIS DATABASE ===============================================

// eslint-disable-next-line no-undef
const { REDIS_ENDPOINT, REDIS_PORT } = process.env;
const client = redis.createClient({
    host: REDIS_ENDPOINT,
    port: REDIS_PORT,
});

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
