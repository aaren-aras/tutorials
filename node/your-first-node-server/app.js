const http = require('http'); // Import Node's built-in HTTP module
const fs = require('fs'); // Import Node's built-in file system module
const portNum = 2999;

// Create server and handle activity when request received
const server = http.createServer((req, res) => {
  // Tells browser that info being sent to it is coming in HTML format, so parse it as such
  res.writeHead(200, { 'Content-Type': 'text/html' }); 
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404); // "Not Found" error
      res.write('Error: File Not Found');
    } else res.write(data); // Send response body to client
    res.end();
  });
})

// Listen on port 3000 and handle errors
server.listen(portNum, err => {
  if (err) console.log('Something went wrong... :(', err)
  else console.log(`Server is listening on port ${portNum}`)
});