var http = require('http');

var manejador = function(solicitud, respuesta){
    console.log('Conexion entrante en el puesrto 3000');
    console.log('Hola Mundo!');
};

var servidor = http.createServer(manejador);

servidor.listen(3000);