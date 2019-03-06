var http = require('http'), fs = require('fs');

var html = fs.readFileSync('./index.html');

var manejador = function (solcitud, respuesta) {
    ruta = solcitud.url;
    console.log(solcitud.url);

        pagina = 'index';

    if(ruta == '/fondo-tarea-DPWA.jpg'){
        fs.readFile('.'+ruta,function(error, contenido){
            respuesta.writeHead(200, {'Content-Type': 'image/jpg'});
            respuesta.write(contenido);
            respuesta.end();
        });
    }else {
        html = fs.readFileSync('./' + pagina + '.html');
        respuesta.write(html);
        respuesta.end();
    }
};

var servidor = http.createServer(manejador);

servidor.listen(3001);