# coding=utf8
import os
import platform

path = os.path
basedir = path.abspath(path.dirname(__file__))
cursystem = platform.system()

class Config:
    SECRET_KEY = 'whats your name' # 秘钥
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    AUTUMNLIFE_POSTS_PER_PAGE = 10

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
                cursystem is 'Windows' and 'sqlite:///' + os.path.join(basedir, \
                'dbs\\tongyang.db') or 'sqlite:////' + os.path.join(basedir, 'dbs/tongyang.db')


config = {
    # 'development': DevelopmentConfig,
    # 'testing': TestingConfig,
    # 'production': ProductionConfig,
    'default': DevelopmentConfig
}