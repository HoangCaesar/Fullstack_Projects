const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../src/app');

const api = supertest(app);

// eslint-disable-next-line no-undef
describe('getOne', () => {
    // eslint-disable-next-line no-undef
    test('Get enough highlights data', async () => {
        await api
            .get('/api/v1/highlights')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    // eslint-disable-next-line no-undef
    test('Status: must be "success"', async () => {
        const response = await api.get(
            '/api/v1/highlights'
        );
        // eslint-disable-next-line no-undef
        expect(response.body.status).toContain('success');
    });
});

// eslint-disable-next-line no-undef
afterAll(() => {
    mongoose.connection.close();
});
