const mongoose = require('mongoose');
const supertest = require('supertest');
// const {} = require('../../src/api/v1/models');
const app = require('../../src/app');

const api = supertest(app);

// eslint-disable-next-line no-undef
describe('Get Journey List - Controller', () => {
    // eslint-disable-next-line no-undef
    test('Wrong api will get Not Found', async () => {
        await api
            .get('/api/blogs')
            .expect(404)
            .expect('Content-Type', /application\/json/);
    }, 100000);

    // eslint-disable-next-line no-undef
    test('Accurate api will succeed', async () => {
        await api
            .get('/api/v1/journeylist/')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    }, 100000);

    // eslint-disable-next-line no-undef
    test('Is the controller return a desired list?', async () => {
        const response = await api.get(
            '/api/v1/journeylist?_month=6&_page=1&_limit=15&_sort=Distance&_order=desc'
        );
        // eslint-disable-next-line no-undef
        expect(response.body.data).toBeInstanceOf(Array);
        // eslint-disable-next-line no-undef
        expect(response.body.pagination._month).toContain('6');
    });

    // eslint-disable-next-line no-undef
    test('Query strings without value, still return a default list', async () => {
        const response = await api.get('/api/v1/journeylist?_month=&_page=&_limit=&_sort=&_order=');
        // eslint-disable-next-line no-undef
        expect(response.body.data.length).toEqual(15);
        // eslint-disable-next-line no-undef
        expect(response.body.pagination._month).toEqual(5);
    });
});

// eslint-disable-next-line no-undef
afterAll(() => {
    mongoose.connection.close();
});
