#coding=utf8
from . import db
from flask import current_app, request
from datetime import *


# 产品
class Product(db.Model):
    __tablename__ = 'ty_product'
    phid = db.Column(db.String(32), primary_key=True)
    name = db.Column(db.String(64), unique=True)

