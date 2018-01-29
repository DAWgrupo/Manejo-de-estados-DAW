from flask import Flask, render_template, make_response, request, url_for, session
app = Flask(__name__)
app.secret_key = 'daw'

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/controlador1/", methods=['POST'])
def controlador1():
	session['usuario'] = request.form['user_name']
	session['contrasenia'] = request.form['user_password']
	return render_template('secundaria.html', usuario=session['usuario'], contrasenia=session['contrasenia'])


@app.route("/controlador2/", methods=['POST'])
def controlador2():
	usuario=session['usuario']
	contrasenia=session['contrasenia']

	valor1=request.form['user_valor1']
	valor2=request.form['user_valor2']

	resultado = int(valor1) + int(valor2)
	return render_template('final.html', resultado=resultado, usuario=usuario, contrasenia=contrasenia, valor1=valor1,valor2=valor2)

if __name__ == '__main__':
    app.run(debug=True, port=5000)