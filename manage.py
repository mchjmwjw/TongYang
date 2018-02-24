import os
from app import create_app, db
from flask_script import Manager, Shell, Server
from flask_migrate import Migrate, MigrateCommand

app = create_app('default')
manager = Manager(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    manager.run()
