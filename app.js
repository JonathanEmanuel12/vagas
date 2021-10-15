var express = require('express');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var usuario = require('./routes/usuario');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/', usuario);





app.listen(3000);   



