const mongoose = require('mongoose');

// Project import
const {
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
} = require('../../src/api/v1/models');
const { findTotalRows } = require('../../src/api/v1/services');

// eslint-disable-next-line no-undef
describe('findTotalRows', () => {
    // eslint-disable-next-line no-undef
    it('should return the total rows for May 2021 when month is 5', async () => {
        const mockData = { totalRows: 10 };

        // eslint-disable-next-line no-undef
        jest.spyOn(May_2021Highlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('5');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(10);
    });

    // eslint-disable-next-line no-undef
    it('should return the total rows for June 2021 when month is 6', async () => {
        const mockData = { totalRows: 20 };

        // eslint-disable-next-line no-undef
        jest.spyOn(June_2021Highlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('6');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(20);
    });

    // eslint-disable-next-line no-undef
    it('should return the total rows for July 2021 when month is 7', async () => {
        const mockData = { totalRows: 30 };

        // eslint-disable-next-line no-undef
        jest.spyOn(July_2021Highlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('7');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(30);
    });
});

// eslint-disable-next-line no-undef
afterAll(async () => {
    await mongoose.connection.close();
});
