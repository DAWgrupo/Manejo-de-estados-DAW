var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});


app.post('/controlador1/', function (req, res) {
    var name = req.body.user_name;
    var pass = req.body.user_password;
    res.send(name + 'INICIO DE SESION EXITOSO');
});

app.post('/controlador2/', function (req, res) {
    var num1 = req.body.user_valor1;
    var num2 = req.body.user_valor2
    var resultado=parseInt(num1)+parseInt(num2);
    res.send(name + 'OPERACION REALIZADA ');
});

var server = app.listen(8888, function () {
    console.log('SERVIDO EN LINEA.....');
});