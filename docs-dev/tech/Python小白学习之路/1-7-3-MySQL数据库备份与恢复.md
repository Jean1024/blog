
---
    title: 1-7-3-MySQL数据库备份与恢复
    date: 2017-09-13 17:36:47
    tags: python
---
## 数据备份
* 进入超级管理员
```
sudo -s
```
* 进入mysql库目录
```
cd /var/lib/mysql
```
* 运行mysqldump命令
```
mysqldump –uroot –p 数据库名 > ~/Desktop/备份文件.sql;
```
>按提示输入mysql的密码

## 数据恢复
* 连接mysql，创建数据库

* 退出连接，执行如下命令

```
mysql -uroot –p 数据库名 < ~/Desktop/备份文件.sql
```
> 根据提示输入mysql密码
