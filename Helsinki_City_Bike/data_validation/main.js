const csv = require('csv-parser');
const fs = require('fs');

const results = [];

// Validate data
const validateResults = async (data) => {
    // Remove utf-8 BOM
    const newData = data.map(
        item => {
            const Departure = item['﻿Departure']
            delete item['﻿Departure']
            return { Departure, ...item }
        }
    )
    return await newData.filter(item => item['Covered distance (m)'] >= 10 && item['Duration (sec.)'] >= 10)
}

// Read CSV file
const readCSVFile = (csvFilename, jsonFilename) => {
    fs.createReadStream(csvFilename, {
        encoding: 'UTF-8',
    })
        .pipe(csv({})
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', async () => {
                const data = await validateResults(results)
                // Convert and create JSON files
                var dictstring = JSON.stringify(data);
                fs.writeFile(jsonFilename, dictstring, { encoding: 'utf8' }, (err) => err && console.error(err));
            })
        );
}

// Execution
readCSVFile('./csv_files/2021-05.csv', `./json_files/2021-05.json`)
readCSVFile('./csv_files/2021-06.csv', `./json_files/2021-06.json`)
readCSVFile('./csv_files/2021-07.csv', `./json_files/2021-07.json`)





