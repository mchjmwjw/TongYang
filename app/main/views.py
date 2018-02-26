# coding=utf8
from flask import render_template, send_from_directory, flash, redirect, url_for, request, current_app, json, make_response, jsonify
import os
import app
from . import main
from flask_login import login_required, current_user
from ..models import Product
from .. import db


@main.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@main.route('/getallproducts', methods=['GET'])
def getallproducts():
    data = [{'name': 'name1'}, {'name': 'name2'}, {'name': 'name3'}]
    return json.dumps(data)
