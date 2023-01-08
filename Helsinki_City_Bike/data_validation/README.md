## Validate & Import Data Strategy

#### Prerequisites:
    No need to install anything here.
#### Configurations: 
    Because the CSV & JSON files are the large files, so I don't want to push them all to github.
#### Description: 
    This part is mainly for validating and importing data. 
#### Technologies: 
    "csv-parser": I used this library to read CSV files.
    "json2csv": convert json to csv.

Overall

![alt text](./img/overall.jpg "Overall of strategy")

#### My strategy will follow these steps:

1. Read CSV files.

- Import libraries and define an array
```javascript
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
                if(resultsPart1.length >= 500000) {
                    resultsPart2.push(data);
                } else {
                    resultsPart1.push(data);
                }
            })
```

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
- Convert arrays of objects to CSV.
```javascript
// Convert and create JSON files
    var csvDataPart1 = jsonToCsv(dataPart1);
    var csvDataPart2 = jsonToCsv(dataPart2);
```
```javascript
const jsonToCsv = (data) => {
    const csvData = parse(data, { quote: '' });
    return csvData
}
```

```javascript
// Write data into the new CSV files
    fs.writeFile(`${jsonFilename}-part1.csv`, csvDataPart1, { encoding: 'utf8' }, (err) => err && console.error(err));
    fs.writeFile(`${jsonFilename}-part2.csv`, csvDataPart2, { encoding: 'utf8' }, (err) => err && console.error(err));
```

- Because the heap memory limitation, I can only execute the convertion one by one
```javascript
// Execution
    readCSVFile('./csv_files/2021-05.csv', `./json_files/2021-05.json`)
    // readCSVFile('./csv_files/2021-06.csv', `./json_files/2021-06.json`)
    // readCSVFile('./csv_files/2021-07.csv', `./json_files/2021-07.json`)
```

4. Import to the database.
- Using mongoDB compass to import the validated JSON files.

![alt text](./img/ImportToDatabase.PNG "Import data with mongoDB compass")

- However, importing by this method does not work due to the memory limitation of mongoDB compass (512MB only - because I am using free cluster of Mongodb atlas :( I'm broke!). 

![alt text](./img/MongodbCompass.PNG "Memory limitation")

- That 's a reason why I change my plan to using [mongoimport](https://www.mongodb.com/docs/database-tools/mongoimport/) for instead. (In the picture below, I was pushing "JSON files" to DB, but it did not work well. I decided to push CSV files to reduce the size of files, so it could fit the free storage. Hope so!)

![alt text](./img/Mongoimport.png "Import data with mongoimport")

```javascript
    mongoimport --uri 'mongodb+srv://MYUSERNAME:SECRETPASSWORD@mycluster-ABCDE.azure.mongodb.net/MY_DB?retryWrites=true&w=majority' --collection MY_COLLECTION --jsonArray --file PATH_TO_MY_VALIDATED_JSON_FILES
```

- It works!!! Congratulations! Finally, I could import these bunch of "tiny" files after couple of days.





