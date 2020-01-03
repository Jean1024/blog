
---
    title: 1-9-2-安装Django
    date: 2017-09-18 17:36:47
    tags: python
---
### 1. 安装Django==1.8.2
1. 创建进入虚拟环境
```
mkvirtualenv h6
workon h6
```
2. 进入项目根目录,安装Django
```
cd python3
pip install django==1.8.2
# 查看安装
pip freeze
```
3. 创建项目
```
django-admin startproject test1
```
test1目录结构如下
![image.png](https://upload-images.jianshu.io/upload_images/5809200-74def9c6eb11af90.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

目录说明：
* manage.py：一个命令行工具，可以使你用多种方式对Django项目进行交互内层的目录：项目的真正的Python包
* _init _.py：一个空文件，它告诉Python这个目录应该被看做一个Python包
* settings.py：项目的配置
* urls.py：项目的URL声明
* wsgi.py：项目与WSGI兼容的Web服务器入口
4. 开启服务
```
cd test1
python manage.py runserver 8899
# 打开浏览器 http://127.0.0.1:8899
```
