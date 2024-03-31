const fs = require('fs');

let genresData = fs.readFile('../../src/api-data/genre-data.json', (err, data) => {
    if (err) throw err
    else genresData = data.toString ();

    console.log (typeof (genresData));
});

//console.log (data.toString ());