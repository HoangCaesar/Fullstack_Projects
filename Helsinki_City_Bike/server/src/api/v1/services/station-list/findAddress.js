const axios = require('axios');
require('dotenv').config();

// ======================================== STATION LIST SERVICE - FIND THE LIST =======================================
// eslint-disable-next-line no-undef
const API_KEY = process.env.HEAR_API_API_KEY;

async function getAddress(address) {
    try {
        const response = await axios.get(
            `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
                address
            )}&apiKey=${API_KEY}`
        );
        console.log(response);
        if (response.data.items.length > 0) {
            return response.data.items;
        }
    } catch (error) {
        throw new Error('Unable to find coordinates');
    }
}

const findAddress = async (stationList) => {
    try {
        // const data = await Promise.all(
        //     stationList.map(async (station) => {
        //         const response = await getCoordinates(station);
        //         console.log(response);
        //         return response;
        //     })
        // );
        const data = await getAddress(stationList);
        return data;
        // const addresses = [];

        // for (const station of stationList) {
        //     const address = await getCoordinates(station).catch((error) => {
        //         console.error(error);
        //     });

        //     if (address) {
        //         addresses.push(address);
        //     }

        //     await new Promise((resolve) => setTimeout(resolve, 500));
        // }

        // return addresses;
    } catch (error) {
        throw new Error('Unable to find');
    }
};

module.exports = findAddress;
