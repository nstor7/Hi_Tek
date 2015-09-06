console.log('Arrancando servidor de Hi-Tek Marine');
var express = require('express');
var app = express();
var parcero = require('body-parser');
app.use(parcero.urlencoded({extended:true}));
var http = require('http');

http.createServer(app).listen(80);
app.listen = function(){
    var servidor = http.createServer(this);
    return server.listen.apply(server, arguments)
    console.log('exitoso puerto http')
};

app.use(express.static('pagina'));