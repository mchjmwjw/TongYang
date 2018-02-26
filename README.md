# TongYang

1. virtualenv venv
2. 创建requirements.txt 依赖
3. 创建manage.py 入口

4. python manage.py db init  初始化数据库迁移脚本
5. python manage.py db migrate -m "initial migration" 创建迁移脚本
6. python hello.py db upgrade 更新数据库

7. python manage.py shell  使用命令行操作数据库
```shell
 from manage import db
 db.create_all()    # 创建所有表
 db.session.commit()
```

8. pip freeze >requirements.txt
9. pip install -r requirements.txt