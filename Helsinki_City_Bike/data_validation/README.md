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

- Import libraries and define an array
```javascript
const csv = require('csv-parser');
const fs = require('fs');

const results = [];
```
- Read: add all state to array.

```javascript
fs.createReadStream(csvFilename, {
        encoding: 'UTF-8',
    })
        .pipe(csv({})
            .on('data', (data) => {
                results.push(data);
            })
```

2. Validate.
- Pass 'results' array through 'validateResults' functions.

```javascript
const data = await validateResults(results)
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
    var dictstring = JSON.stringify(data);
    fs.writeFile(jsonFilename, dictstring, { encoding: 'utf8' }, (err) => err && console.error(err));
```

Because the heap memory limitation, I can only execute the convertion one by one
```javascript
// Execution
    readCSVFile('./csv_files/2021-05.csv', `./json_files/2021-05.json`)
    // readCSVFile('./csv_files/2021-06.csv', `./json_files/2021-06.json`)
    // readCSVFile('./csv_files/2021-07.csv', `./json_files/2021-07.json`)
```

4. Import to the database.
- Using mongoDB compass to import the validated JSON files.

![alt text](./img/ImportToDatabase.PNG "Import data with mongoDB compass")

- However, importing by this method does not work due to the memory limitation of mongoDB compass (512MB only). That 's a reason why I change my plan to using [mongoimport](https://www.mongodb.com/docs/database-tools/mongoimport/) for instead.

![alt text](./img/Mongoimport.png "Import data with mongoimport")

```javascript
    mongoimport --uri 'mongodb+srv://MYUSERNAME:SECRETPASSWORD@mycluster-ABCDE.azure.mongodb.net/MY_DB?retryWrites=true&w=majority' --collection MY_COLLECTION --jsonArray --file PATH_TO_MY_VALIDATED_JSON_FILES
```

- It works!!! Congratulations! Finally, I could import these bunch of "tiny" files after couple of days.





