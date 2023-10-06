//una vez corriendo el servidor accedemos al url localhost:3000 + nombre del archivo con su extención
// En el siguiente ejemplo podría ser así como ejemplo:
// path invierno.html  http://localhost:3000/invierno.html
//path verano.html http://localhost:3000/verano.html

var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
      return res.end();
    });
  })
  .listen(3000);
