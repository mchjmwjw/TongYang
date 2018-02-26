# coding=utf8
from flask import Flask, render_template
from flask_moment import Moment
from flask_sqlalchemy import SQLAlchemy
from config import config
from os import path
from flask_pagedown import PageDown

root_path = path.abspath(path.dirname(__file__))
moment = Moment()
db = SQLAlchemy()
pagedown = PageDown()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    moment.init_app(app)
    db.init_app(app)

    # 注册蓝本
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # 注册auth蓝本
    # from .auth import auth as auth_blueprint
    # app.register_blueprint(auth_blueprint, url_prefix='/auth')  # 路由加上前缀

    pagedown.init_app(app)

    return app
