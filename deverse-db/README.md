# deverse-db

## Usage

``` js
const setupDatabase = require('deverse-db')

setupDatabase(config).then(db => {
    const { Agent, Metric } =  db
    
}).catch(err => console.error(err))

```