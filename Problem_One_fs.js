//importing file system module
const file_system = require('fs');

//creating a file
file_system.writeFile('example.txt', 'This is an example', (err) => {
    if (err) { //error control
        console.log(err);
    } else {
        //if no error, log the success message
        console.log('File successfully created');
        //reading the file
        file_system.readFile('example.txt', 'utf8', (err, file) => {
            if (err) { //error control
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
}
);