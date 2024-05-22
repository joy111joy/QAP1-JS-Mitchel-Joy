//import path module
const path = require('path');
//joining the path
const directory = '/home/user';
const fileName = 'file.txt';
const filePath = path.join(directory, fileName);
//logging the file path
//should print '/home/user/file.txt'
console.log(filePath);
