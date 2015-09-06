console.log('Arrancando servidor de Hi-Tek Marine');
var express = require('express');
var app = express();
var parcero = require('body-parser');
app.use(parcero.urlencoded({extended:true}));
var http = require('http');

app.listen = function(){
    var servidor = http.createServer(this);
    return server.listen.apply(server, arguments);
}

app.use(express.static('pagina'));