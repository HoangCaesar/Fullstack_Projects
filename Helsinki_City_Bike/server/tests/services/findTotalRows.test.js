const mongoose = require('mongoose');

// Project import
const {
    TestHighlights
} = require('../../src/api/v1/models');
const { findTotalRows } = require('../../src/api/v1/services');

// eslint-disable-next-line no-undef
describe('findTotalRows', () => {
    // eslint-disable-next-line no-undef
    it('should return the total rows for May 2021 when month is 5', async () => {
        const mockData = { totalRows: 785298 };

        // eslint-disable-next-line no-undef
        jest.spyOn(TestHighlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('5');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(785298);
    });

    // eslint-disable-next-line no-undef
    it('should return the total rows for June 2021 when month is 6', async () => {
        const mockData = { totalRows: 1178840 };

        // eslint-disable-next-line no-undef
        jest.spyOn(TestHighlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('6');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(1178840);
    });

    // eslint-disable-next-line no-undef
    it('should return the total rows for July 2021 when month is 7', async () => {
        const mockData = { totalRows: 1164620 };

        // eslint-disable-next-line no-undef
        jest.spyOn(TestHighlights, 'findOne').mockImplementationOnce(() => mockData);

        const result = await findTotalRows('7');

        // eslint-disable-next-line no-undef
        expect(result).toEqual(1164620);
    });
});

// eslint-disable-next-line no-undef
afterAll(async () => {
    await mongoose.connection.close();
});
