from flask import Flask, render_template, make_response, request, url_for
app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/controlador1/", methods=['POST'])
def controlador1():
	response = make_response(render_template('secundaria.html'))
	
	response.set_cookie('usuario',request.form['user_name'])
	response.set_cookie('contrasenia',request.form['user_password'])
	return response


@app.route("/controlador2/", methods=['POST'])
def controlador2():
	usuario=request.cookies.get('usuario')
	contrasenia=request.cookies.get('contrasenia')

	valor1=request.form['user_valor1']
	valor2=request.form['user_valor2']

	resultado = int(valor1) + int(valor2)
	return render_template('final.html', resultado=resultado, usuario=usuario, contrasenia=contrasenia, valor1=valor1,valor2=valor2)

if __name__ == '__main__':
    app.run(debug=True, port=5000)