const express = require('express')
	
	const bodyParser = require('body-parser')
	var app = express();
	

	app.set('view engine', 'pug');

	

	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json());
	

		var options = {
		    root: __dirname + '/views/',
		    dotfiles: 'deny',
		    headers: {
		        'x-timestamp': Date.now(),
		        'x-sent': true
		    }
		  }; 
	

	app.get('/',function(req,res){
	       
	     res.sendFile('index.html',options);
	

	});
	

	app.post('/controlador1/',function(req,res){

	  sessData.usuario = req.body.user_name;
	  sessData.contrasenia = req.body.user_password;
	  res.render(__dirname + '/views/secundaria', { usuario: sessData.usuario, contrasenia: sessData.contrasenia});
	

	});
	

	app.post('/controlador2/',function(req,res){
	

	  var user = req.session.usuario 
	  var pass = req.session.contrasenia
	  console.log(req.body.user_valor1)
	  var val1 = req.body.user_valor1 
	  var val2 = req.body.user_valor2
	  var result = val1 + val2
	  res.render(__dirname + '/views/final', { usuario: user, contrasenia: pass, valor1: val1, valor2: val2, resultado: result});
	

	});
	
	 app.listen(process.env.PORT || 8081)
	