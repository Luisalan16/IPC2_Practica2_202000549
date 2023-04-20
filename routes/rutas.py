from flask import Blueprint, render_template, request

home = Blueprint('home', __name__)

@home.route('/home')
def index():
    return render_template('index.html')

@home.route('/cv')
def hojaVida():
    return render_template('principal.html')