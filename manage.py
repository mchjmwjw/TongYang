import os
from app import create_app, db
from app.models import Product
from flask_script import Manager, Shell, Server
from flask_migrate import Migrate, MigrateCommand

app = create_app('default')
manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)


def make_shell_context():
    return dict(app=app, db=db, Product=Product)
manager.add_command("shell", Shell(make_context=make_shell_context))

server = Server(host="https://tongyang.herokuapp.com/", port=8000, ssl_context='adhoc')  # https还要加入参数 ssl_context='adhoc'
manager.add_command("runserver", server)

if __name__ == '__main__':
    manager.run()
