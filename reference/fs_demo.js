const fs = require ('fs');
const path = require('path');

//create folder

fs.mkdir(path.join(__dirname,'/test'), {} , err => {
    if(err) throw err;
    console.log('folder created...');
});

//create and write file

fs.writeFile(
    path.join(__dirname,'/test','hello.txt'),
     'Hello from Node JS ' ,
      err => {
    if(err) throw err;
    console.log('File written ......');


});

// Append File

fs.appendFile(
    path.join(__dirname,'/test','hello.txt'),
     'I luv NODEJS' ,
      err => {
    if(err) throw err;
    console.log('File written ......');
});


//Read File

fs.readFile(path.join(__dirname,'/test2','hello.txt'), 'utf8' , (err,data) => {
    if(err) throw err;
    console.log(data);
});


//Rename File

fs.rename(path.join(__dirname,'/test2','sample.txt'), 
              path.join(__dirname,'/test2','rename.txt'), 
              err => {
                if(err) throw err;
                console.log('folder created...');
});