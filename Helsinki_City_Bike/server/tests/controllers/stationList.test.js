const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../src/app');

const api = supertest(app);

// eslint-disable-next-line no-undef
describe('getList', () => {
    // eslint-disable-next-line no-undef
    test('Wrong api will get Not Found', async () => {
        await api
            .get('/api/v1/stationlist/blogs')
            .expect(500)
            .expect('Content-Type', /application\/json/);
    }, 100000);

    // eslint-disable-next-line no-undef
    test('Accurate api will get data', async () => {
        await api
            .get('/api/v1/stationlist')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    }, 100000);

    // eslint-disable-next-line no-undef
    test('Is the controller return a desired list?', async () => {
        const response = await api.get(
            '/api/v1/stationlist?_page=1&_limit=15&_sort=Distance&_order=desc'
        );
        // eslint-disable-next-line no-undef
        expect(response.body.data).toBeInstanceOf(Array);
        // eslint-disable-next-line no-undef
        expect(response.body.pagination._limit).toContain('15');
    });

    // eslint-disable-next-line no-undef
    test('Query strings without value, still return a default list', async () => {
        const response = await api.get('/api/v1/stationlist?&_page=&_limit=&_sort=&_order=');
        // eslint-disable-next-line no-undef
        expect(response.body.data.length).toEqual(10);
    });
});

// eslint-disable-next-line no-undef
describe('getOne', () => {
    // eslint-disable-next-line no-undef
    test('Is the controller return a desired station?', async () => {
        const response = await api.get(
            '/api/v1/stationlist/63d7c78f439c478c848fc7ef'
        );
        // eslint-disable-next-line no-undef
        expect(response.body.status).toContain('success');
    });

    // eslint-disable-next-line no-undef
    test('Wrong id will not get a station', async () => {
        await api
                .get('/api/v1/stationlist/63d7c78f439c478c848fc7e')
                .expect(500)
                .expect('Content-Type', /application\/json/);
    });
});

// eslint-disable-next-line no-undef
afterAll(() => {
    mongoose.connection.close();
});
