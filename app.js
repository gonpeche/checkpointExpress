'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes')
var app = express();

module.exports = app; // esto es solo para testear mas facil

// acuerdense de agregar su router o cualquier middleware que necesiten aca
app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json()); // seria para AJAX requests

app.use('/',routes)
// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000, function (){
    console.log('listening on port 3000');
});
