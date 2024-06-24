//import the http module
const http = require('http');

//Port number
const port = 3000;

//creating a server
const server = http.createServer((req, res) => {
    //setting the response header
    res.setHeader('Content-Type', 'text/html');
    //sending the response
    res.end('<h1>Hello World</h1>');
});

//listening to the server
server.listen(port, () => {
    console.log(`Server is running on port ${port} at http://localhost:${port}`);
});