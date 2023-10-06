//Accedemos desde la terminal a la dirección donde tenemos el archivo 
//Luego ejecutamos el comando node + {nombre del archivo con su extención .js}
//ejemplo: node demo_querystring.js
//Cuando navegamos a la dirección http://localhost:3000/?year=2017&month=julio, nos mostraría 2017 julio

var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(3000);


  