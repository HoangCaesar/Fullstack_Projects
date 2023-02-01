const fs = require('fs').promises;
const path = require('path');
const { format } = require('date-fns');

// ========================================== LOG EVENTS ===============================================
// eslint-disable-next-line no-undef
const fileName = path.join(__dirname, '../logs', 'logs.log');

const logEvents = async (msg) => {
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tss:mm:HH')}`;
    const contentLog = `${dateTime}-----${msg}\n`;
    try {
        fs.appendFile(fileName, contentLog);
    } catch (error) {
        console.log(error);
    }
};

module.exports = logEvents;
