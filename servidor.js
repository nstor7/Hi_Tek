console.log('Arrancando servidor de Hi-Tek Marine');
var express = require('express');
var app = express();
var parcero = require('body-parser');
app.use(parcero.urlencoded({extended:true}));
var servidor;

servidor = app.listen(172.31.38.114:80, function(){
    console.log('Servidor Arrancado');
});

app.use(express.static('pagina'));