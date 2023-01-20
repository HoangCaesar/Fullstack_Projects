const csv = require('csv-parser');
const fs = require('fs');

const resultsPart1 = [];
const resultsPart2 = [];

// Validate data
const validateResults = async (data) => {
    // Remove utf-8 BOM
    const newData = data.map((item) => {
        const Departure = item['﻿Departure'];
        delete item['﻿Departure'];
        return { Departure, ...item };
    });
    return await newData.filter(
        (item) => item['Covered distance (m)'] >= 10 && item['Duration (sec.)'] >= 10
    );
};

// Read CSV file
const readCSVFile = (csvFilename, jsonFilename) => {
    fs.createReadStream(csvFilename, {
        encoding: 'UTF-8',
    }).pipe(
        csv({})
            .on('data', (data) => {
                if (resultsPart1.length >= 500000) {
                    resultsPart2.push(data);
                } else {
                    resultsPart1.push(data);
                }
            })
            .on('end', async () => {
                const dataPart1 = await validateResults(resultsPart1);
                const dataPart2 = await validateResults(resultsPart2);

                // convert to JSON
                const jsonDataPart1 = JSON.stringify(dataPart1);
                const jsonDataPart2 = JSON.stringify(dataPart2);

                fs.writeFile(
                    `${jsonFilename}-part1.json`,
                    jsonDataPart1,
                    { encoding: 'utf8' },
                    (err) => err && console.error(err)
                );
                fs.writeFile(
                    `${jsonFilename}-part2.json`,
                    jsonDataPart2,
                    { encoding: 'utf8' },
                    (err) => err && console.error(err)
                );
            })
    );
};

// Execution
readCSVFile('./csv_files/2021-05.csv', `./validated_files/2021-05`);
readCSVFile('./csv_files/2021-06.csv', `./validated_files/2021-06`);
readCSVFile('./csv_files/2021-07.csv', `./validated_files/2021-07`);
