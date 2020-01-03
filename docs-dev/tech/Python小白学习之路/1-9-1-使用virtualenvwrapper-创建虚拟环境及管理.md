
---
    title: 1-9-1-使用virtualenvwrapper-创建虚拟环境及管理
    date: 2017-09-16 17:36:47
    tags: python
---
### 1.0 安装virtualenvwrapper 
1. 安装
```
sudo pip3 install virtualenvwrapper 
```
2. 环境变量
```
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```
* 如果不知道`python3`在哪使用 `which python3`

[参考](https://medium.com/@gitudaniel/installing-virtualenvwrapper-for-python3-ad3dfea7c717)

### 2.0 使用

1. 创建：mkvirtualenv [虚拟环境名称]
2. 删除：rmvirtualenv [虚拟环境名称]
3. 进入：workon [虚拟环境名称]
4. 退出：deactivate
所有的虚拟环境，都位于~/.virtualenvs目录下

