console.log('Arrancando servidor de Hi-Tek Marine');
var express = require('express');
var app = express();
var parcero = require('body-parser');
app.use(parcero.urlencoded({extended:true}));
var servidor;

servidor = app.listen(8080, function(){
    console.log('Servidor Arrancado');
});

app.use(express.static('pagina'));