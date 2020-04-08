
let http = require('http');

const SERVER_PORT = 5060;

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World From Sample Node App!');
    res.end();
}).listen(SERVER_PORT);

console.log(`Server is listening on PORT: ${SERVER_PORT}`);

