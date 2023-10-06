//Retornando la dirección url de donde estoy a partir del listen 3000.

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(3000);