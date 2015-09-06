console.log('Arrancando servidor de Hi-Tek Marine');
var express = require('express');
var app = express();
var parcero = require('body-parser');
app.use(parcero.urlencoded({extended:true}));
var http = require('http');

http.createServer(app).listen(80)

app.use(express.static('pagina'));