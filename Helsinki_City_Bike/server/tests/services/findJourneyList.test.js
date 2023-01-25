const mongoose = require('mongoose');

// Project Import
const { findJourneyList } = require('../../src/api/v1/services');

// eslint-disable-next-line no-undef
describe('findJourneyList', () => {
    // eslint-disable-next-line no-undef
    it('should return the list of journeys for the given month', async () => {
        const list = await findJourneyList('5');

        // eslint-disable-next-line no-undef
        expect(list).toBeInstanceOf(Array);
    });

    // eslint-disable-next-line no-undef
    it('should return the list of journeys sorted in descending order', async () => {
        const list = await findJourneyList('6', '1', '15', 'Duration', 'desc');

        // eslint-disable-next-line no-undef
        expect(list[0].Duration).toBeGreaterThanOrEqual(list[14].Duration);
    });

    // eslint-disable-next-line no-undef
    it('should return the list of journeys sorted in ascending order', async () => {
        const list = await findJourneyList('7', '1', '15', 'Duration', 'asc');

        // eslint-disable-next-line no-undef
        expect(list[0].Duration).toBeLessThanOrEqual(list[14].Duration);
    });
});

// eslint-disable-next-line no-undef
afterAll(async () => {
    await mongoose.connection.close();
});
