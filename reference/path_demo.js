const path = require('path');


console.log(__filename);

//base file name

console.log(path.basename(__filename));

//directory name


console.log(path.dirname(__filename));

//extension name

console.log(path.extname(__filename));

//create path object

console.log(path.parse(__filename));

