const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-type':'application/json'});

    let salida = {
        nombre : 'Jaime',
        edad : 21,
        url : req.url
    }

    res.write( JSON.stringify(salida));

    res.end()

}).listen(8081);


console.log('Servidor escuchando en el puerto 8080');


