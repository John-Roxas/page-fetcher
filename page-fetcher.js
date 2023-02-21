const fs = require('fs');
const request = require('request');

request('http://example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('./index.html', body, error => {
    if (error) {
      console.log(error);
    } else {
      const stats = fs.statSync('./index.html');
      let fileSize = stats.size;
      console.log('Successful. Downloaded and saved ' + fileSize + ' bytes to ./index.html');
      
    }
  
  });
});