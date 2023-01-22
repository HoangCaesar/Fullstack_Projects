const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../logs', 'logs.log');

const logEvents = async (msg) => {
    try {
        fs.appendFile(fileName, msg);
    } catch (error) {
        console.log(error);
    }
};

module.exports = logEvents;
