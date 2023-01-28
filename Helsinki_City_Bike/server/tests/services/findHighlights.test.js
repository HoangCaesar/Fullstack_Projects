const mongoose = require('mongoose');

// Project Import
const {
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
} = require('../../src/api/v1/models');
const { findHighlights } = require('../../src/api/v1/services');

// eslint-disable-next-line no-undef
describe('find', () => {
    // eslint-disable-next-line no-undef
    it('should return an array of highlights from May, June and July', async () => {
        const highlights = await findHighlights();
        const highlightsInMay = await May_2021Highlights.find({});
        const highlightsInJune = await June_2021Highlights.find({});
        const highlightsInJuly = await July_2021Highlights.find({});

        // eslint-disable-next-line no-undef
        expect(highlights).toBeDefined();
        // eslint-disable-next-line no-undef
        expect(highlights.length).toBe(3);
        // eslint-disable-next-line no-undef
        expect(highlights[0]).toEqual(highlightsInMay);
        // eslint-disable-next-line no-undef
        expect(highlights[1]).toEqual(highlightsInJune);
        // eslint-disable-next-line no-undef
        expect(highlights[2]).toEqual(highlightsInJuly);
    }, 100000);
});

// eslint-disable-next-line no-undef
afterAll(async () => {
    await mongoose.connection.close();
});
