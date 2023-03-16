var http = require('http');
const port =3000;
var server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); // set the response header
  res.write('<h1>Hello Node!!!!</h1>\n'); // write the response
//   res.end(); // end the response
});

// Listen on port 3000
server.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
