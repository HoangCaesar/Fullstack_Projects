## Validate & Import Data Strategy

#### Prerequisites:
    No need to install anything here.
#### Configurations: 
    Because the CSV & JSON files are the large files, so I don't want to push them all to github.
#### Description: 
    This part is mainly for validating and importing data. 
#### Technology: 
    "csv-parser": I used this library to read CSV files.

Overall

![alt text](./img/overall.jpg "Overall of strategy")

#### My strategy will follow these steps:

1. Read CSV files.

- Import libraries and define 2 arrays
```javascript
const csv = require('csv-parser');
const fs = require('fs');

const resultsPart1 = [];
const resultsPart2 = [];
```
- Read: add all state to array.

```javascript
fs.createReadStream(csvFilename, {
        encoding: 'UTF-8',
    })
        .pipe(csv({})
            .on('data', (data) => {
                if (resultsPart1.length >= 500000) {
                    resultsPart2.push(data);
                } else {
                    resultsPart1.push(data);
                }
            })
```

- Because a original JSON file is too large and mongoDB limits the size of a file. That's the reasons why we need to divide it into 2 small JSON files, so we need 2 arrays here.

2. Validate.
- Pass 'results' array through 'validateResults' functions.

```javascript
const dataPart1 = await validateResults(resultsPart1);
const dataPart2 = await validateResults(resultsPart2);
```

- Validation: remove all BOM before check states - if distance less than 10m or duration less than 10s ---> remove.
```javascript
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
```

3. Convert to JSON files.
```javascript
// Convert and create JSON files
    var dictstringPart1 = JSON.stringify(dataPart1);
    var dictstringPart2 = JSON.stringify(dataPart2);
    fs.writeFile(`${jsonFilename}-part1.json`, dictstringPart1, { encoding: 'utf8' }, (err) => err && console.error(err));
    fs.writeFile(`${jsonFilename}-part2.json`, dictstringPart2, { encoding: 'utf8' }, (err) => err && console.error(err));
```

Because the heap memory limitation, I can only execute the convertion one by one
```javascript
// Execution
    readCSVFile('./csv_files/2021-05.csv', `./json_files/2021-05.json`)
    // readCSVFile('./csv_files/2021-06.csv', `./json_files/2021-06.json`)
    // readCSVFile('./csv_files/2021-07.csv', `./json_files/2021-07.json`)
```

4. Import to the database.
- Using mongoDB compass to import the validated JSON files ---> avoid exceeding memory limitation.

![alt text](./img/ImportToDatabase.PNG "Import data with mongoDB compass")

